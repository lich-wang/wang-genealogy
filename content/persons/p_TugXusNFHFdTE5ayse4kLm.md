---
schema: wang-person/v1
id: p_TugXusNFHFdTE5ayse4kLm
status: active
merged_into: null
display_name: 王圻
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XpEELuk7892fR5dm4wR4VS
        subject_person_id: p_TugXusNFHFdTE5ayse4kLm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王圻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HuBqnxobrHRexfhc7gLxgG
          claim_id: c_XpEELuk7892fR5dm4wR4VS
          source_id: s_ZbuPAvs6FvNxc2a3yS47qN
          stance: supports
          locator: CBDB:126533
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126533）
          source: &a1
            id: s_ZbuPAvs6FvNxc2a3yS47qN
            source_type: api_record
            title: 中国历代人物传记资料库：王圻（CBDB 126533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126533&o=json
            external_identifier: CBDB:126533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.004Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_k7i1DDbCRSSLVy1pLGz1q4
        subject_person_id: p_TugXusNFHFdTE5ayse4kLm
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1530年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jKAAwE3XPz6Ktzi7B3QxNb
          claim_id: c_k7i1DDbCRSSLVy1pLGz1q4
          source_id: s_ZbuPAvs6FvNxc2a3yS47qN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_TPADKbqQKMmoDj65dL2eei
        subject_person_id: p_TugXusNFHFdTE5ayse4kLm
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1615年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bKptLY2taNxr7FoYJDZrUN
          claim_id: c_TPADKbqQKMmoDj65dL2eei
          source_id: s_ZbuPAvs6FvNxc2a3yS47qN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EpwsjwNfLxZXZQuDdvvsAY
        subject_person_id: p_TugXusNFHFdTE5ayse4kLm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王圻（1530年—1615年），明人物。明清進士進士，籍贯上海，入仕進士，曾任兵備僉事、布政使司參議、府同知。（中国历代人物传记资料库 CBDB 126533）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LF_okh-raSIB-IzknfMy26
          claim_id: c_EpwsjwNfLxZXZQuDdvvsAY
          source_id: s_ZbuPAvs6FvNxc2a3yS47qN
          stance: supports
          locator: CBDB:126533
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6WCsAw-BVQUYWuCYZ4-IlV
        subject_person_id: p_ZqpxKBqyDJtXTG8SZjo1en
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TugXusNFHFdTE5ayse4kLm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OqIkSnN-ZJ-XeMluWOUlr3
          claim_id: c_6WCsAw-BVQUYWuCYZ4-IlV
          source_id: s_xfmSrY8o5ZjXvpY59KrvHH
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第一百五十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xfmSrY8o5ZjXvpY59KrvHH
            source_type: api_record
            title: 中国历代人物传记资料库：王熠（CBDB 331799）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331799&o=json
            external_identifier: CBDB:331799
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.375Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ZqpxKBqyDJtXTG8SZjo1en
        status: active
        display_name: 王熠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_fvG7h9FZSHRSbwrhr8fBBZ
        subject_person_id: p_ay7ZWq8iTSKoexQkJpXoz8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TugXusNFHFdTE5ayse4kLm
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0HOqEOH0G2bUNxLooFA-y_
          claim_id: c_fvG7h9FZSHRSbwrhr8fBBZ
          source_id: s_M8LipiEiJ3iLWxCDWjc4qy
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第一百五十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_M8LipiEiJ3iLWxCDWjc4qy
            source_type: api_record
            title: 中国历代人物传记资料库：王槐（CBDB 331798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331798&o=json
            external_identifier: CBDB:331798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.374Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ay7ZWq8iTSKoexQkJpXoz8
        status: active
        display_name: 王槐
        merged_into_person_id: null
    - claim:
        id: c_JBIYmfLnZJQ51LQaONMWYa
        subject_person_id: p_JejZnT2mLskseiu9D1mCTP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TugXusNFHFdTE5ayse4kLm
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7Z7hwIe4IfFNoYKq2RHe2i
          claim_id: c_JBIYmfLnZJQ51LQaONMWYa
          source_id: s_6sLmA8ME6eQcRjVuB72xKv
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第一百五十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6sLmA8ME6eQcRjVuB72xKv
            source_type: api_record
            title: 中国历代人物传记资料库：王鈇（CBDB 331797）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331797&o=json
            external_identifier: CBDB:331797
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.374Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JejZnT2mLskseiu9D1mCTP
        status: active
        display_name: 王鈇
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_JIYPBvHeh0jLHJt_VSwHwa
        subject_person_id: p_L6e8HB8GohB5NJoBPANcAy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TugXusNFHFdTE5ayse4kLm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AAf94hD8425mFRmJZeVVBs
          claim_id: c_JIYPBvHeh0jLHJt_VSwHwa
          source_id: s_6HR8bgPz4dKNqLaGEsS1jy
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126533 王圻）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6HR8bgPz4dKNqLaGEsS1jy
            source_type: api_record
            title: 中国历代人物传记资料库：王墀（CBDB 331803）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331803&o=json
            external_identifier: CBDB:331803
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_L6e8HB8GohB5NJoBPANcAy
        status: active
        display_name: 王墀
        merged_into_person_id: null
    - claim:
        id: c_YNlir7cukyff5d1YbANxnh
        subject_person_id: p_PxzE9zNAcET5a6KZfVTy3L
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TugXusNFHFdTE5ayse4kLm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2olsbnwCaAl_sXUw2jv3u2
          claim_id: c_YNlir7cukyff5d1YbANxnh
          source_id: s_S8v6Y1HOjm28Sr05I6k6ps
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126533 王圻）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_S8v6Y1HOjm28Sr05I6k6ps
            source_type: api_record
            title: 中国历代人物传记资料库：王陞（CBDB 331804）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331804&o=json
            external_identifier: CBDB:331804
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PxzE9zNAcET5a6KZfVTy3L
        status: active
        display_name: 王陞
        merged_into_person_id: null
    - claim:
        id: c_Rir86hDDrCv6wgEZBq-vgs
        subject_person_id: p_TugXusNFHFdTE5ayse4kLm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_j4NKkgDxjFSf3BsUEw22Gw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x_twASc8tnnk89RNmdCDVW
          claim_id: c_Rir86hDDrCv6wgEZBq-vgs
          source_id: s_s84NZik-pGWGIo-SfTxR57
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126533 王圻）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_s84NZik-pGWGIo-SfTxR57
            source_type: api_record
            title: 中国历代人物传记资料库：王重（CBDB 331805）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331805&o=json
            external_identifier: CBDB:331805
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_j4NKkgDxjFSf3BsUEw22Gw
        status: active
        display_name: 王重
        merged_into_person_id: null
---

# 王圻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王圻 | accepted |
| birth.date | 1530年 | accepted |
| death.date | 1615年 | accepted |
| bio.summary | 王圻（1530年—1615年），明人物。明清進士進士，籍贯上海，入仕進士，曾任兵備僉事、布政使司參議、府同知。（中国历代人物传记资料库 CBDB 126533） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZqpxKBqyDJtXTG8SZjo1en | 王熠 | accepted |
| ancestors | p_ay7ZWq8iTSKoexQkJpXoz8 | 王槐 | accepted |
| ancestors | p_JejZnT2mLskseiu9D1mCTP | 王鈇 | accepted |
| other | p_L6e8HB8GohB5NJoBPANcAy | 王墀 | accepted |
| other | p_PxzE9zNAcET5a6KZfVTy3L | 王陞 | accepted |
| other | p_j4NKkgDxjFSf3BsUEw22Gw | 王重 | accepted |

## 外部来源

- [中国历代人物传记资料库：王墀（CBDB 331803）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331803&o=json)
- [中国历代人物传记资料库：王鈇（CBDB 331797）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331797&o=json)
- [中国历代人物传记资料库：王槐（CBDB 331798）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331798&o=json)
- [中国历代人物传记资料库：王圻（CBDB 126533）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126533&o=json)
- [中国历代人物传记资料库：王陞（CBDB 331804）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331804&o=json)
- [中国历代人物传记资料库：王熠（CBDB 331799）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331799&o=json)
- [中国历代人物传记资料库：王重（CBDB 331805）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331805&o=json)
