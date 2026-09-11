---
schema: wang-person/v1
id: p_adHfWbeLMA5Dbzy8swhFpm
status: active
merged_into: null
display_name: 王耀旦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aMZX8fB433kQHPwVK8woN7
        subject_person_id: p_adHfWbeLMA5Dbzy8swhFpm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王耀旦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LcM4yWm5LY7WFKpZ37SQit
          claim_id: c_aMZX8fB433kQHPwVK8woN7
          source_id: s_zq1E7j9PFskHKZcK2X7y6G
          stance: supports
          locator: CBDB:703532
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（703532）
          source: &a1
            id: s_zq1E7j9PFskHKZcK2X7y6G
            source_type: api_record
            title: 中国历代人物传记资料库：王耀旦（CBDB 703532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703532&o=json
            external_identifier: CBDB:703532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.624Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JePDbQy7tJ7Jv9Nxz2VMGY
        subject_person_id: p_adHfWbeLMA5Dbzy8swhFpm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王耀旦，清人物。籍贯上虞，身份为孝子/孝女，入仕增廣生; 增廣生員。（中国历代人物传记资料库 CBDB 703532）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Cc4Kv7T0mOy_s_R7kbaDRv
          claim_id: c_JePDbQy7tJ7Jv9Nxz2VMGY
          source_id: s_zq1E7j9PFskHKZcK2X7y6G
          stance: supports
          locator: CBDB:703532
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

# 王耀旦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王耀旦 | accepted |
| bio.summary | 王耀旦，清人物。籍贯上虞，身份为孝子/孝女，入仕增廣生; 增廣生員。（中国历代人物传记资料库 CBDB 703532） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王耀旦（CBDB 703532）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703532&o=json)
