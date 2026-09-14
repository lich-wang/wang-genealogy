---
schema: wang-person/v1
id: p_eDR6tLPhLCK8UJHjLtEsxB
status: active
merged_into: null
display_name: 王達
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nB2uMBS5QeMQMf7Hcz976Y
        subject_person_id: p_eDR6tLPhLCK8UJHjLtEsxB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王達
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RiRhMdK3RWYL37aKnvgBub
          claim_id: c_nB2uMBS5QeMQMf7Hcz976Y
          source_id: s_JNifBPRmPgZWP2mjZHKXCH
          stance: supports
          locator: CBDB:257948
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（257948）
          source: &a1
            id: s_JNifBPRmPgZWP2mjZHKXCH
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 257948）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257948&o=json
            external_identifier: CBDB:257948
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.436Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HusPEjMHUssdJqQe8Kpb2w
        subject_person_id: p_eDR6tLPhLCK8UJHjLtEsxB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王達，明人物。成化二十三年進士，籍贯侯官。（中国历代人物传记资料库 CBDB 257948）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_P3JRyCP4Kcvcf2jo87PKN-
          claim_id: c_HusPEjMHUssdJqQe8Kpb2w
          source_id: s_JNifBPRmPgZWP2mjZHKXCH
          stance: supports
          locator: CBDB:257948
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HN-DgmpUiywOlu8riB-Zl5
        subject_person_id: p_6viAMHrM5RymA1BEH8cpA3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eDR6tLPhLCK8UJHjLtEsxB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zefWr0vho8PMGzhEBsxmt7
          claim_id: c_HN-DgmpUiywOlu8riB-Zl5
          source_id: s_WWCliI28v2RFV1y9eLjzgp
          stance: supports
          locator: CBDB：兄弟 王迪（200444）之父／母 王端
          quotation: null
          interpretation_note: 由兄弟关系推断：王達 与 王迪 为同胞（CBDB 记「弟」），王迪 之父／母即 王達 之父／母。
          source:
            id: s_WWCliI28v2RFV1y9eLjzgp
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 257948）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257948&o=json
            external_identifier: CBDB:257948
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6viAMHrM5RymA1BEH8cpA3
        status: active
        display_name: 王端
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_iyEtYB50zlgw-mhRI0l7Vv
        subject_person_id: p_Yi63SwvU3iiXw7LYSrnJmq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eDR6tLPhLCK8UJHjLtEsxB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0nYvUPIk-DsZ9jkyROUR6F
          claim_id: c_iyEtYB50zlgw-mhRI0l7Vv
          source_id: s_WWCliI28v2RFV1y9eLjzgp
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200444 王迪）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_WWCliI28v2RFV1y9eLjzgp
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 257948）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257948&o=json
            external_identifier: CBDB:257948
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Yi63SwvU3iiXw7LYSrnJmq
        status: active
        display_name: 王迪
        merged_into_person_id: null
---

# 王達

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王達 | accepted |
| bio.summary | 王達，明人物。成化二十三年進士，籍贯侯官。（中国历代人物传记资料库 CBDB 257948） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6viAMHrM5RymA1BEH8cpA3 | 王端 | accepted |
| other | p_Yi63SwvU3iiXw7LYSrnJmq | 王迪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王達（CBDB 257948）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257948&o=json)
