---
schema: wang-person/v1
id: p_F8NZqodJZq6dvtt7kXmm8U
status: active
merged_into: null
display_name: 王徽
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Vggfn3AvJPiHKNQACJS6yN
        subject_person_id: p_F8NZqodJZq6dvtt7kXmm8U
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WiKvdks56u2x6CJDMao2Rw
          claim_id: c_Vggfn3AvJPiHKNQACJS6yN
          source_id: s_tbyqf7phVLgW598Z3YwUde
          stance: supports
          locator: CBDB:25797
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（25797）
          source: &a1
            id: s_tbyqf7phVLgW598Z3YwUde
            source_type: api_record
            title: 中国历代人物传记资料库：王徽（CBDB 25797）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25797&o=json
            external_identifier: CBDB:25797
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.922Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hoxGe8drGy1GK1pnvRSLEk
        subject_person_id: p_F8NZqodJZq6dvtt7kXmm8U
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iBQeU9z68yGE7oKvLXXihG
          claim_id: c_hoxGe8drGy1GK1pnvRSLEk
          source_id: s_tbyqf7phVLgW598Z3YwUde
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_o5pV0NYNZ8rlocOGiBj5rP
        subject_person_id: p_F8NZqodJZq6dvtt7kXmm8U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_18xP97xNdBDKv6dJygvfDQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zAodw_iFzETRSup1iLC_Af
          claim_id: c_o5pV0NYNZ8rlocOGiBj5rP
          source_id: s_a3jvJj3mziCfCqi2zx4GQS
          stance: supports
          locator: CBDB PersonKinshipInfo：父、子、孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_a3jvJj3mziCfCqi2zx4GQS
            source_type: api_record
            title: 中国历代人物传记资料库：王迥（CBDB 25798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25798&o=json
            external_identifier: CBDB:25798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.922Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_18xP97xNdBDKv6dJygvfDQ
        status: active
        display_name: 王迥
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王徽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王徽 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_18xP97xNdBDKv6dJygvfDQ | 王迥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王徽（CBDB 25797）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25797&o=json)
- [中国历代人物传记资料库：王迥（CBDB 25798）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25798&o=json)
