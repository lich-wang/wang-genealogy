---
schema: wang-person/v1
id: p_35Acf4NR43Nju8WwhDtwvN
status: active
merged_into: null
display_name: 王顯相
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Kuj8BMgH19th7NSgwf116G
        subject_person_id: p_35Acf4NR43Nju8WwhDtwvN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4gGPjFzTSCcfC1G6oQoxPW
          claim_id: c_Kuj8BMgH19th7NSgwf116G
          source_id: s_5NcEc4WnRcqKurT3d88Hj9
          stance: supports
          locator: CBDB:640873
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640873）
          source: &a1
            id: s_5NcEc4WnRcqKurT3d88Hj9
            source_type: api_record
            title: 中国历代人物传记资料库：王顯相（CBDB 640873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640873&o=json
            external_identifier: CBDB:640873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.397Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mqiPEEZL7C77pBpWQsmvdy
        subject_person_id: p_35Acf4NR43Nju8WwhDtwvN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯相，清人物。籍贯雲南，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 640873）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3jpK1NYVUjmQqROurNtI0w
          claim_id: c_mqiPEEZL7C77pBpWQsmvdy
          source_id: s_5NcEc4WnRcqKurT3d88Hj9
          stance: supports
          locator: CBDB:640873
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

# 王顯相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王顯相 | accepted |
| bio.summary | 王顯相，清人物。籍贯雲南，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 640873） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王顯相（CBDB 640873）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640873&o=json)
