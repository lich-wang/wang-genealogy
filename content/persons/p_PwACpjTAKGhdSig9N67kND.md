---
schema: wang-person/v1
id: p_PwACpjTAKGhdSig9N67kND
status: active
merged_into: null
display_name: 王閔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pGnPFQpm5VQS5XoFsiV18v
        subject_person_id: p_PwACpjTAKGhdSig9N67kND
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王閔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_US6VARZtza1oA9MQd5S74q
          claim_id: c_pGnPFQpm5VQS5XoFsiV18v
          source_id: s_AkhH287QLpJZUc47MvFbQ4
          stance: supports
          locator: CBDB:213946
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213946）
          source: &a1
            id: s_AkhH287QLpJZUc47MvFbQ4
            source_type: api_record
            title: 中国历代人物传记资料库：王閔（CBDB 213946）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213946&o=json
            external_identifier: CBDB:213946
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.129Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1ufSDmSsVPzKWZM9MasuSH
        subject_person_id: p_PwACpjTAKGhdSig9N67kND
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王閔，明人物。萬曆二年進士，籍贯清苑。（中国历代人物传记资料库 CBDB 213946）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KbSNf-Yn0IjjLbmPtMYVbh
          claim_id: c_1ufSDmSsVPzKWZM9MasuSH
          source_id: s_AkhH287QLpJZUc47MvFbQ4
          stance: supports
          locator: CBDB:213946
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

# 王閔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王閔 | accepted |
| bio.summary | 王閔，明人物。萬曆二年進士，籍贯清苑。（中国历代人物传记资料库 CBDB 213946） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王閔（CBDB 213946）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213946&o=json)
