---
schema: wang-person/v1
id: p_XaytARoatp4GyyU4wEdtEn
status: active
merged_into: null
display_name: 王鑑
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BerLe9N1vzQ2PPcn3rA1yK
        subject_person_id: p_XaytARoatp4GyyU4wEdtEn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tMEc5dABNv1AdLEChoqEuh
          claim_id: c_BerLe9N1vzQ2PPcn3rA1yK
          source_id: s_fbw3VK1Qeo2FHNjFcLGBsS
          stance: supports
          locator: CBDB:281042
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（281042）
          source: &a1
            id: s_fbw3VK1Qeo2FHNjFcLGBsS
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 281042）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281042&o=json
            external_identifier: CBDB:281042
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.041Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ffLmN5fCZhApyzeAAGgaSB
        subject_person_id: p_XaytARoatp4GyyU4wEdtEn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑑，明人物。正德十二年進士，籍贯固安。（中国历代人物传记资料库 CBDB 281042）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hU1sGjLE9C8EcE0z-rxtvq
          claim_id: c_ffLmN5fCZhApyzeAAGgaSB
          source_id: s_fbw3VK1Qeo2FHNjFcLGBsS
          stance: supports
          locator: CBDB:281042
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_fCXx5WHWrZvASxbVU390Aq
        subject_person_id: p_XaytARoatp4GyyU4wEdtEn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_z4K3ehvdbQWDKCv3VLhZDK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qf-Cw1X-zF0F7_FHWOvZdz
          claim_id: c_fCXx5WHWrZvASxbVU390Aq
          source_id: s_fbw3VK1Qeo2FHNjFcLGBsS
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第四十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_z4K3ehvdbQWDKCv3VLhZDK
        status: active
        display_name: 王可學
        merged_into_person_id: null
    - claim:
        id: c_jQjA6hkjSMvLzxfzxsQ-_O
        subject_person_id: p_XaytARoatp4GyyU4wEdtEn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JBe26iDHJ53YMwwqyRd8RV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CQqvvlPYqpYxuRaQAGi128
          claim_id: c_jQjA6hkjSMvLzxfzxsQ-_O
          source_id: s_yDwGAwn3QHhSBC5KcaxE4I
          stance: supports
          locator: CBDB：兄弟 王可學（201954）之父／母 王鑑
          quotation: null
          interpretation_note: 由兄弟关系推断：王魁 与 王可學 为同胞（CBDB 记「弟」），王可學 之父／母即 王魁 之父／母。
          source:
            id: s_yDwGAwn3QHhSBC5KcaxE4I
            source_type: api_record
            title: 中国历代人物传记资料库：王魁（CBDB 281046）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281046&o=json
            external_identifier: CBDB:281046
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JBe26iDHJ53YMwwqyRd8RV
        status: active
        display_name: 王魁
        merged_into_person_id: null
    - claim:
        id: c_nl63gHoL_iKC38nVMJXngP
        subject_person_id: p_XaytARoatp4GyyU4wEdtEn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PbxMRneJiuN1m41aB52TMb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9mcwPA8Ko1P97Dlsb2I28B
          claim_id: c_nl63gHoL_iKC38nVMJXngP
          source_id: s_VM7zRtVHDOo4AnnvnbTFRM
          stance: supports
          locator: CBDB：兄弟 王可學（201954）之父／母 王鑑
          quotation: null
          interpretation_note: 由兄弟关系推断：王智 与 王可學 为同胞（CBDB 记「弟」），王可學 之父／母即 王智 之父／母。
          source:
            id: s_VM7zRtVHDOo4AnnvnbTFRM
            source_type: api_record
            title: 中国历代人物传记资料库：王智（CBDB 281049）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281049&o=json
            external_identifier: CBDB:281049
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PbxMRneJiuN1m41aB52TMb
        status: active
        display_name: 王智
        merged_into_person_id: null
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
        id: p_R3i4rkxoLf5PaKmKGKaUM2
        status: active
        display_name: 王賢
        merged_into_person_id: null
    - claim:
        id: c_7lnGkdQzJCxpnlp3Cil5Vt
        subject_person_id: p_XaytARoatp4GyyU4wEdtEn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WdgNLnyQb6EoZ9in9R5rkz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xAqVS8F3r51b6_pwdRnNYE
          claim_id: c_7lnGkdQzJCxpnlp3Cil5Vt
          source_id: s_QoP9e6SCoywN08qk9Ghhdw
          stance: supports
          locator: CBDB：兄弟 王可學（201954）之父／母 王鑑
          quotation: null
          interpretation_note: 由兄弟关系推断：王勉 与 王可學 为同胞（CBDB 记「弟」），王可學 之父／母即 王勉 之父／母。
          source:
            id: s_QoP9e6SCoywN08qk9Ghhdw
            source_type: api_record
            title: 中国历代人物传记资料库：王勉（CBDB 281050）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281050&o=json
            external_identifier: CBDB:281050
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WdgNLnyQb6EoZ9in9R5rkz
        status: active
        display_name: 王勉
        merged_into_person_id: null
    - claim:
        id: c_dYIe36q2y9zX8r3mYMQ1iK
        subject_person_id: p_XaytARoatp4GyyU4wEdtEn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_j54h6qi6KNfCEpPDg97m4B
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vs56WwRkefk2H88AKqJeFc
          claim_id: c_dYIe36q2y9zX8r3mYMQ1iK
          source_id: s_k2qKsqnVYqouyHdrI8gUNG
          stance: supports
          locator: CBDB：兄弟 王可學（201954）之父／母 王鑑
          quotation: null
          interpretation_note: 由兄弟关系推断：王周 与 王可學 为同胞（CBDB 记「弟」），王可學 之父／母即 王周 之父／母。
          source:
            id: s_k2qKsqnVYqouyHdrI8gUNG
            source_type: api_record
            title: 中国历代人物传记资料库：王周（CBDB 281048）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281048&o=json
            external_identifier: CBDB:281048
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_j54h6qi6KNfCEpPDg97m4B
        status: active
        display_name: 王周
        merged_into_person_id: null
    - claim:
        id: c_YdSYO9qQJFmhjoRRG_oem6
        subject_person_id: p_XaytARoatp4GyyU4wEdtEn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sgz91oY3nXUD352RkS2nbR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2HmLrC-4sL8hR-U7qsU4Q8
          claim_id: c_YdSYO9qQJFmhjoRRG_oem6
          source_id: s_4aG3KqWtqnhgvBDxuFKdSV
          stance: supports
          locator: CBDB：兄弟 王可學（201954）之父／母 王鑑
          quotation: null
          interpretation_note: 由兄弟关系推断：王美 与 王可學 为同胞（CBDB 记「兄」），王可學 之父／母即 王美 之父／母。
          source:
            id: s_4aG3KqWtqnhgvBDxuFKdSV
            source_type: api_record
            title: 中国历代人物传记资料库：王美（CBDB 281051）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281051&o=json
            external_identifier: CBDB:281051
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sgz91oY3nXUD352RkS2nbR
        status: active
        display_name: 王美
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鑑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑑 | accepted |
| bio.summary | 王鑑，明人物。正德十二年進士，籍贯固安。（中国历代人物传记资料库 CBDB 281042） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_z4K3ehvdbQWDKCv3VLhZDK | 王可學 | accepted |
| children | p_JBe26iDHJ53YMwwqyRd8RV | 王魁 | accepted |
| children | p_PbxMRneJiuN1m41aB52TMb | 王智 | accepted |
| children | p_R3i4rkxoLf5PaKmKGKaUM2 | 王賢 | accepted |
| children | p_WdgNLnyQb6EoZ9in9R5rkz | 王勉 | accepted |
| children | p_j54h6qi6KNfCEpPDg97m4B | 王周 | accepted |
| children | p_sgz91oY3nXUD352RkS2nbR | 王美 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑑（CBDB 281042）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281042&o=json)
- [中国历代人物传记资料库：王魁（CBDB 281046）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281046&o=json)
- [中国历代人物传记资料库：王美（CBDB 281051）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281051&o=json)
- [中国历代人物传记资料库：王勉（CBDB 281050）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281050&o=json)
- [中国历代人物传记资料库：王賢（CBDB 281047）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281047&o=json)
- [中国历代人物传记资料库：王智（CBDB 281049）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281049&o=json)
- [中国历代人物传记资料库：王周（CBDB 281048）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281048&o=json)
