---
schema: wang-person/v1
id: p_q11LXLFmnXBaLBXCASPfqE
status: active
merged_into: null
display_name: 王廷陞
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4AAPWHcTivNBd7kRhQXUba
        subject_person_id: p_q11LXLFmnXBaLBXCASPfqE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷陞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XHRgyXQNFZwzTmCRDvhVKF
          claim_id: c_4AAPWHcTivNBd7kRhQXUba
          source_id: s_7D6ZXLzLqHCXdyQtb8SovW
          stance: supports
          locator: CBDB:693956
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（693956）
          source: &a1
            id: s_7D6ZXLzLqHCXdyQtb8SovW
            source_type: api_record
            title: 中国历代人物传记资料库：王廷陞（CBDB 693956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693956&o=json
            external_identifier: CBDB:693956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.666Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B7pUucAb3xa6XJUQDuLQ4Y
        subject_person_id: p_q11LXLFmnXBaLBXCASPfqE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷陞，清人物。籍贯海鹽，身份为鄉里長者、孝子/孝女，入仕太學生。（中国历代人物传记资料库 CBDB 693956）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tyqx1tsDNpHGssj0Hx4ess
          claim_id: c_B7pUucAb3xa6XJUQDuLQ4Y
          source_id: s_7D6ZXLzLqHCXdyQtb8SovW
          stance: supports
          locator: CBDB:693956
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
  descendants: []
  other:
    - claim:
        id: c_QVOEC4o_8LfqamIAJZlFfr
        subject_person_id: p_NniyJ4scHJ78VvDwDFxC2k
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_q11LXLFmnXBaLBXCASPfqE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sPOCZv-mGFI9YxbgnrExyS
          claim_id: c_QVOEC4o_8LfqamIAJZlFfr
          source_id: s_ckAghgHKjNz7qkQkUVjBJS
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 693956 王廷陞）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ckAghgHKjNz7qkQkUVjBJS
            source_type: api_record
            title: 中国历代人物传记资料库：王廷堯（CBDB 693957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693957&o=json
            external_identifier: CBDB:693957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NniyJ4scHJ78VvDwDFxC2k
        status: active
        display_name: 王廷堯
        merged_into_person_id: null
---

# 王廷陞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷陞 | accepted |
| bio.summary | 王廷陞，清人物。籍贯海鹽，身份为鄉里長者、孝子/孝女，入仕太學生。（中国历代人物传记资料库 CBDB 693956） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_NniyJ4scHJ78VvDwDFxC2k | 王廷堯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷陞（CBDB 693956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693956&o=json)
- [中国历代人物传记资料库：王廷堯（CBDB 693957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693957&o=json)
