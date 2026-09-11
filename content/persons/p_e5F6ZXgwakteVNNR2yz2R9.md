---
schema: wang-person/v1
id: p_e5F6ZXgwakteVNNR2yz2R9
status: active
merged_into: null
display_name: 王楷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Fd31Kp7c95PKLjEFKbo6YU
        subject_person_id: p_e5F6ZXgwakteVNNR2yz2R9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XDTE2akSa2NugfgVt3ksKF
          claim_id: c_Fd31Kp7c95PKLjEFKbo6YU
          source_id: s_Gj8Kn3tsDZcz1FPsemHwL7
          stance: supports
          locator: CBDB:212938
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（212938）
          source: &a1
            id: s_Gj8Kn3tsDZcz1FPsemHwL7
            source_type: api_record
            title: 中国历代人物传记资料库：王楷（CBDB 212938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212938&o=json
            external_identifier: CBDB:212938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.100Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_49zvFaAm3WADtBbYX7gpHB
        subject_person_id: p_e5F6ZXgwakteVNNR2yz2R9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楷，明人物。萬曆二年進士，籍贯上元。（中国历代人物传记资料库 CBDB 212938）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uur0FjzxXzcw0Vwn7NA7iE
          claim_id: c_49zvFaAm3WADtBbYX7gpHB
          source_id: s_Gj8Kn3tsDZcz1FPsemHwL7
          stance: supports
          locator: CBDB:212938
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王楷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楷 | accepted |
| bio.summary | 王楷，明人物。萬曆二年進士，籍贯上元。（中国历代人物传记资料库 CBDB 212938） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王楷（CBDB 212938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212938&o=json)
