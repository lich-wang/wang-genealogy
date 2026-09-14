---
schema: wang-person/v1
id: p_MHbhW7H3F2fSyLUerCV7Kn
status: active
merged_into: null
display_name: 王子淵
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Zx6n9kedkK6m2ESLzqs8f5
        subject_person_id: p_MHbhW7H3F2fSyLUerCV7Kn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子淵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BDpCCBkg9MxWF37UGg8N15
          claim_id: c_Zx6n9kedkK6m2ESLzqs8f5
          source_id: s_q6Vg4d5qDCxUTNHYpUTw5N
          stance: supports
          locator: CBDB:1913
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1913）
          source: &a1
            id: s_q6Vg4d5qDCxUTNHYpUTw5N
            source_type: api_record
            title: 中国历代人物传记资料库：王子淵（CBDB 1913）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1913&o=json
            external_identifier: CBDB:1913
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.393Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GyFB2jvo5jhm5qrkXR3C5M
        subject_person_id: p_MHbhW7H3F2fSyLUerCV7Kn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子淵，宋人物。籍贯鄄城，曾任朝請郎、司農寺少卿、太府寺少卿。（中国历代人物传记资料库 CBDB 1913）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EaL_2atpKSQYcS80Hu1-Zw
          claim_id: c_GyFB2jvo5jhm5qrkXR3C5M
          source_id: s_q6Vg4d5qDCxUTNHYpUTw5N
          stance: supports
          locator: CBDB:1913
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_V5eyJQrm0mvTGUxaiUvp-T
        subject_person_id: p_c1EMkFFpXvJLra5Y2MCWp6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MHbhW7H3F2fSyLUerCV7Kn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9jGy7bBZvQRbUav5W0knDq
          claim_id: c_V5eyJQrm0mvTGUxaiUvp-T
          source_id: s_GcCxucrQU8R5JlFO7rh2k8
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1835）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_GcCxucrQU8R5JlFO7rh2k8
            source_type: api_record
            title: 中国历代人物传记资料库：王子淵（CBDB 1913）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1913&o=json
            external_identifier: CBDB:1913
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_c1EMkFFpXvJLra5Y2MCWp6
        status: active
        display_name: 王逵
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王子淵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子淵 | accepted |
| bio.summary | 王子淵，宋人物。籍贯鄄城，曾任朝請郎、司農寺少卿、太府寺少卿。（中国历代人物传记资料库 CBDB 1913） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_c1EMkFFpXvJLra5Y2MCWp6 | 王逵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王子淵（CBDB 1913）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1913&o=json)
