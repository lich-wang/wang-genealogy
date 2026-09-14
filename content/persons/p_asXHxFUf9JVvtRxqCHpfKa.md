---
schema: wang-person/v1
id: p_asXHxFUf9JVvtRxqCHpfKa
status: active
merged_into: null
display_name: 王璔
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q29am9kFmoNvmSwAue4bM5
        subject_person_id: p_asXHxFUf9JVvtRxqCHpfKa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5hMX4Hfu5hUZ867TfFTJSs
          claim_id: c_Q29am9kFmoNvmSwAue4bM5
          source_id: s_CCumtEpqY39xszUz6nN5f4
          stance: supports
          locator: CBDB:332700
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（332700）
          source: &a1
            id: s_CCumtEpqY39xszUz6nN5f4
            source_type: api_record
            title: 中国历代人物传记资料库：王璔（CBDB 332700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332700&o=json
            external_identifier: CBDB:332700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.384Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CAjR9nsrbeC1c885vRB4Xd
        subject_person_id: p_asXHxFUf9JVvtRxqCHpfKa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璔，明人物。天順八年進士，籍贯大興。（中国历代人物传记资料库 CBDB 332700）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2Pu7QaoUhX8vtV188CKKES
          claim_id: c_CAjR9nsrbeC1c885vRB4Xd
          source_id: s_CCumtEpqY39xszUz6nN5f4
          stance: supports
          locator: CBDB:332700
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3QnipYm5FiH2LdWqUKHOUu
        subject_person_id: p_emX7f7ZNYGdtrayueB5cGr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_asXHxFUf9JVvtRxqCHpfKa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vDX2zPTKsfArYuzCbhWvcH
          claim_id: c_3QnipYm5FiH2LdWqUKHOUu
          source_id: s_MRATFz6DOeAU1acOwYmB9o
          stance: supports
          locator: CBDB：兄弟 王璒（126824）之父／母 王勛
          quotation: null
          interpretation_note: 由兄弟关系推断：王璔 与 王璒 为同胞（CBDB 记「弟」），王璒 之父／母即 王璔 之父／母。
          source:
            id: s_MRATFz6DOeAU1acOwYmB9o
            source_type: api_record
            title: 中国历代人物传记资料库：王璔（CBDB 332700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332700&o=json
            external_identifier: CBDB:332700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_emX7f7ZNYGdtrayueB5cGr
        status: active
        display_name: 王勛
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_QsXY3MU26uLzQ1sFA4pl81
        subject_person_id: p_1ZpZ4oSkBmp5LTrwz98U1P
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_asXHxFUf9JVvtRxqCHpfKa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e8efmALjA9Wj47Q65BLxVO
          claim_id: c_QsXY3MU26uLzQ1sFA4pl81
          source_id: s_MRATFz6DOeAU1acOwYmB9o
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126824 王璒）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_MRATFz6DOeAU1acOwYmB9o
            source_type: api_record
            title: 中国历代人物传记资料库：王璔（CBDB 332700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332700&o=json
            external_identifier: CBDB:332700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1ZpZ4oSkBmp5LTrwz98U1P
        status: active
        display_name: 王璒
        merged_into_person_id: null
---

# 王璔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璔 | accepted |
| bio.summary | 王璔，明人物。天順八年進士，籍贯大興。（中国历代人物传记资料库 CBDB 332700） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_emX7f7ZNYGdtrayueB5cGr | 王勛 | accepted |
| other | p_1ZpZ4oSkBmp5LTrwz98U1P | 王璒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璔（CBDB 332700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332700&o=json)
