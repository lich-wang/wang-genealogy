---
schema: wang-person/v1
id: p_kdyFbBQa8WtNVKHcguH9RH
status: active
merged_into: null
display_name: 王奎光
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dyjDP7ny2b1DjDPkKCBnjR
        subject_person_id: p_kdyFbBQa8WtNVKHcguH9RH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奎光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h1Z9V7uSXFh8K8uGSXNzeu
          claim_id: c_dyjDP7ny2b1DjDPkKCBnjR
          source_id: s_f68ZEncHoogSqj7TpecG61
          stance: supports
          locator: CBDB:308158
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（308158）
          source: &a1
            id: s_f68ZEncHoogSqj7TpecG61
            source_type: api_record
            title: 中国历代人物传记资料库：王奎光（CBDB 308158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308158&o=json
            external_identifier: CBDB:308158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.795Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1EdmKWCE72Ben7K91EK3fR
        subject_person_id: p_kdyFbBQa8WtNVKHcguH9RH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奎光，明人物。嘉靖二十三年進士，籍贯陽城。（中国历代人物传记资料库 CBDB 308158）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_p-dUJkH1LOSlacgwED-S1C
          claim_id: c_1EdmKWCE72Ben7K91EK3fR
          source_id: s_f68ZEncHoogSqj7TpecG61
          stance: supports
          locator: CBDB:308158
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fmnMjPnn30obwGpegsrAtb
        subject_person_id: p_GvhnbSfs4k75xQrdJJphA9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kdyFbBQa8WtNVKHcguH9RH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AvcT_ei85R2G4-ltccqOpT
          claim_id: c_fmnMjPnn30obwGpegsrAtb
          source_id: s_bXNPK8ffhOBrBODKb0DirF
          stance: supports
          locator: CBDB：兄弟 王國光（125310）之父／母 王承祖
          quotation: null
          interpretation_note: 由兄弟关系推断：王奎光 与 王國光 为同胞（CBDB 记「兄」），王國光 之父／母即 王奎光 之父／母。
          source:
            id: s_bXNPK8ffhOBrBODKb0DirF
            source_type: api_record
            title: 中国历代人物传记资料库：王奎光（CBDB 308158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308158&o=json
            external_identifier: CBDB:308158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GvhnbSfs4k75xQrdJJphA9
        status: active
        display_name: 王承祖
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_oBamOElTXADVidHleARXLs
        subject_person_id: p_fAeAj1ECenpg29AWYPB25D
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kdyFbBQa8WtNVKHcguH9RH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CLdSS7IbeeIDYPi0-9p8Ms
          claim_id: c_oBamOElTXADVidHleARXLs
          source_id: s_bXNPK8ffhOBrBODKb0DirF
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 125310 王國光）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bXNPK8ffhOBrBODKb0DirF
            source_type: api_record
            title: 中国历代人物传记资料库：王奎光（CBDB 308158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308158&o=json
            external_identifier: CBDB:308158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fAeAj1ECenpg29AWYPB25D
        status: active
        display_name: 王國光
        merged_into_person_id: null
---

# 王奎光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王奎光 | accepted |
| bio.summary | 王奎光，明人物。嘉靖二十三年進士，籍贯陽城。（中国历代人物传记资料库 CBDB 308158） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GvhnbSfs4k75xQrdJJphA9 | 王承祖 | accepted |
| other | p_fAeAj1ECenpg29AWYPB25D | 王國光 | accepted |

## 外部来源

- [中国历代人物传记资料库：王奎光（CBDB 308158）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308158&o=json)
