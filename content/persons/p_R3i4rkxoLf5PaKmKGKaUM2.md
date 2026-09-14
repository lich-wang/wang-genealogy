---
schema: wang-person/v1
id: p_R3i4rkxoLf5PaKmKGKaUM2
status: active
merged_into: null
display_name: 王賢
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B9hzVFF4QBrMhN2Q6xVCyg
        subject_person_id: p_R3i4rkxoLf5PaKmKGKaUM2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_94BkJNLFkVr8yGztQe54k7
          claim_id: c_B9hzVFF4QBrMhN2Q6xVCyg
          source_id: s_9ExcbVN616hKCssSVQd3hn
          stance: supports
          locator: CBDB:281047
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（281047）
          source: &a1
            id: s_9ExcbVN616hKCssSVQd3hn
            source_type: api_record
            title: 中国历代人物传记资料库：王賢（CBDB 281047）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281047&o=json
            external_identifier: CBDB:281047
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.042Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Adi5iDd9zLL8vwkxK2VkyQ
        subject_person_id: p_R3i4rkxoLf5PaKmKGKaUM2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賢，明人物。正德十二年進士，籍贯固安。（中国历代人物传记资料库 CBDB 281047）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xsXu-sFd0N7TKuNW2NTtdh
          claim_id: c_Adi5iDd9zLL8vwkxK2VkyQ
          source_id: s_9ExcbVN616hKCssSVQd3hn
          stance: supports
          locator: CBDB:281047
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uZDb46rSCd8nPi11HHbilN
        subject_person_id: p_XaytARoatp4GyyU4wEdtEn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_R3i4rkxoLf5PaKmKGKaUM2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xo8NjJeynFf1fcM7tqbJ5w
          claim_id: c_uZDb46rSCd8nPi11HHbilN
          source_id: s_47RevMHiwqNperRlsCnUWN
          stance: supports
          locator: CBDB：兄弟 王可學（201954）之父／母 王鑑
          quotation: null
          interpretation_note: 由兄弟关系推断：王賢 与 王可學 为同胞（CBDB 记「弟」），王可學 之父／母即 王賢 之父／母。
          source:
            id: s_47RevMHiwqNperRlsCnUWN
            source_type: api_record
            title: 中国历代人物传记资料库：王賢（CBDB 281047）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281047&o=json
            external_identifier: CBDB:281047
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XaytARoatp4GyyU4wEdtEn
        status: active
        display_name: 王鑑
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_OPOdOY15iVMTcKUA_nZBnn
        subject_person_id: p_R3i4rkxoLf5PaKmKGKaUM2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_z4K3ehvdbQWDKCv3VLhZDK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DGijiMfBUWs9vjIOQ38WxX
          claim_id: c_OPOdOY15iVMTcKUA_nZBnn
          source_id: s_47RevMHiwqNperRlsCnUWN
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201954 王可學）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_47RevMHiwqNperRlsCnUWN
            source_type: api_record
            title: 中国历代人物传记资料库：王賢（CBDB 281047）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281047&o=json
            external_identifier: CBDB:281047
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_z4K3ehvdbQWDKCv3VLhZDK
        status: active
        display_name: 王可學
        merged_into_person_id: null
---

# 王賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賢 | accepted |
| bio.summary | 王賢，明人物。正德十二年進士，籍贯固安。（中国历代人物传记资料库 CBDB 281047） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XaytARoatp4GyyU4wEdtEn | 王鑑 | accepted |
| other | p_z4K3ehvdbQWDKCv3VLhZDK | 王可學 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賢（CBDB 281047）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281047&o=json)
