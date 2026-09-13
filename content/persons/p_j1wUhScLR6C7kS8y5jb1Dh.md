---
schema: wang-person/v1
id: p_j1wUhScLR6C7kS8y5jb1Dh
status: active
merged_into: null
display_name: 王成甫
cbdb_id: 250445
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jnYgJw2PnUBJpMV7zj9gSH
        subject_person_id: p_j1wUhScLR6C7kS8y5jb1Dh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成甫，明人物。成化十一年進士。（中国历代人物传记资料库 CBDB 250445）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_pMz3FICX31S5vsn0Y05cNm
          claim_id: c_jnYgJw2PnUBJpMV7zj9gSH
          source_id: s_Gc5qA1L9v94fcqeCH53DCE
          stance: supports
          locator: CBDB:250445
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Gc5qA1L9v94fcqeCH53DCE
            source_type: api_record
            title: 中国历代人物传记资料库：王成甫（CBDB 250445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250445&o=json
            external_identifier: CBDB:250445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QTDx4U94CxLf2HbULUmKpx
        subject_person_id: p_j1wUhScLR6C7kS8y5jb1Dh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成甫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NQWek1JqVACc6Q9gPf2dNm
          claim_id: c_QTDx4U94CxLf2HbULUmKpx
          source_id: s_Gc5qA1L9v94fcqeCH53DCE
          stance: supports
          locator: CBDB:250445
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
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
  descendants:
    - claim:
        id: c_XuET9YqkCUvX67n1AtMo2a
        subject_person_id: p_j1wUhScLR6C7kS8y5jb1Dh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4FbGby9fFeKQMmker7tMMP
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HA6AwfTqgryaToBvgbSNNh
          claim_id: c_XuET9YqkCUvX67n1AtMo2a
          source_id: s_MUxq2FyJ4QRyAx99MTCU4A
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第一百七十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MUxq2FyJ4QRyAx99MTCU4A
            source_type: api_record
            title: 中国历代人物传记资料库：王珩（CBDB 126638）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126638&o=json
            external_identifier: CBDB:126638
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.081Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4FbGby9fFeKQMmker7tMMP
        status: active
        display_name: 王珩
        merged_into_person_id: null
  other: []
---

# 王成甫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王成甫，明人物。成化十一年進士。（中国历代人物传记资料库 CBDB 250445） | accepted |
| name.primary | 王成甫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_4FbGby9fFeKQMmker7tMMP | 王珩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王成甫（CBDB 250445）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250445&o=json)
- [中国历代人物传记资料库：王珩（CBDB 126638）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126638&o=json)
