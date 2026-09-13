---
schema: wang-person/v1
id: p_8fDiA64i7XEi5BnTAt9qhu
status: active
merged_into: null
display_name: 王炳衡
cbdb_id: 126591
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gMMTuu2yG5Si5f7CkSPANZ
        subject_person_id: p_8fDiA64i7XEi5BnTAt9qhu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炳衡，明人物。明清進士進士，籍贯崑山，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 126591）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_AjywZWVPs-QbXgSTghYWAC
          claim_id: c_gMMTuu2yG5Si5f7CkSPANZ
          source_id: s_CFLfH4tE2456JXGm2yxieh
          stance: supports
          locator: CBDB:126591
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_CFLfH4tE2456JXGm2yxieh
            source_type: api_record
            title: 中国历代人物传记资料库：王炳衡（CBDB 126591）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126591&o=json
            external_identifier: CBDB:126591
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CxP8jMwhetUXNdn13XWbwE
        subject_person_id: p_8fDiA64i7XEi5BnTAt9qhu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炳衡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_zJfp3k43UY3PzG5smPZb4k
          claim_id: c_CxP8jMwhetUXNdn13XWbwE
          source_id: s_CFLfH4tE2456JXGm2yxieh
          stance: supports
          locator: CBDB:126591
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_lwdOjZwNNfeLhqcYikNJXN
        subject_person_id: p_rn5bs45vsLNkK5gzRaTQ98
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8fDiA64i7XEi5BnTAt9qhu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U97vOXo0h8IWka-iTDjssI
          claim_id: c_lwdOjZwNNfeLhqcYikNJXN
          source_id: s_yQnx55PXgPSsjfouyrNp2S
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百一十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yQnx55PXgPSsjfouyrNp2S
            source_type: api_record
            title: 中国历代人物传记资料库：王法（CBDB 210101）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210101&o=json
            external_identifier: CBDB:210101
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.998Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_rn5bs45vsLNkK5gzRaTQ98
        status: active
        display_name: 王法
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_-jjFN7bNMnmMcbIhouN5PJ
        subject_person_id: p_b46BhToF7RrYNEMoLPheA2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8fDiA64i7XEi5BnTAt9qhu
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L3Dh6iXRigR2p0OM44NiUT
          claim_id: c_-jjFN7bNMnmMcbIhouN5PJ
          source_id: s_dNV4bZ8LZ4FB8QE3KNrYN2
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百一十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dNV4bZ8LZ4FB8QE3KNrYN2
            source_type: api_record
            title: 中国历代人物传记资料库：王銀（CBDB 210099）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210099&o=json
            external_identifier: CBDB:210099
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.998Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_b46BhToF7RrYNEMoLPheA2
        status: active
        display_name: 王銀
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王炳衡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王炳衡，明人物。明清進士進士，籍贯崑山，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 126591） | accepted |
| name.primary | 王炳衡 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rn5bs45vsLNkK5gzRaTQ98 | 王法 | accepted |
| ancestors | p_b46BhToF7RrYNEMoLPheA2 | 王銀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王炳衡（CBDB 126591）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126591&o=json)
- [中国历代人物传记资料库：王法（CBDB 210101）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210101&o=json)
- [中国历代人物传记资料库：王銀（CBDB 210099）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210099&o=json)
