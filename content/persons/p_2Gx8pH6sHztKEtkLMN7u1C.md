---
schema: wang-person/v1
id: p_2Gx8pH6sHztKEtkLMN7u1C
status: active
merged_into: null
display_name: 王瑭
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wASmoMD5YBpLSf7mLwBd1V
        subject_person_id: p_2Gx8pH6sHztKEtkLMN7u1C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ff2bDAgf14bEzP9FpArucz
          claim_id: c_wASmoMD5YBpLSf7mLwBd1V
          source_id: s_vXt7EfqfhFLQRHs9zkrC1p
          stance: supports
          locator: CBDB:199751
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199751）
          source: &a1
            id: s_vXt7EfqfhFLQRHs9zkrC1p
            source_type: api_record
            title: 中国历代人物传记资料库：王瑭（CBDB 199751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199751&o=json
            external_identifier: CBDB:199751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.577Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_32Ean72WyES7MrMz4vtJhU
        subject_person_id: p_2Gx8pH6sHztKEtkLMN7u1C
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1443年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BjeATicFArdzdEYAAZpxvT
          claim_id: c_32Ean72WyES7MrMz4vtJhU
          source_id: s_vXt7EfqfhFLQRHs9zkrC1p
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nPdJZhnzJufqfU8K33mxsA
        subject_person_id: p_2Gx8pH6sHztKEtkLMN7u1C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pLAWzChgNyDUaVwQx1k74M
          claim_id: c_nPdJZhnzJufqfU8K33mxsA
          source_id: s_vXt7EfqfhFLQRHs9zkrC1p
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1UKzRnMnxGfq_G4Hbg1Ll0
        subject_person_id: p_MbP7H9snAG1vb4zQM8p7Mm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2Gx8pH6sHztKEtkLMN7u1C
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LicUsMSwT56nFx6KVZ3RO8
          claim_id: c_1UKzRnMnxGfq_G4Hbg1Ll0
          source_id: s_vXt7EfqfhFLQRHs9zkrC1p
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第五十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MbP7H9snAG1vb4zQM8p7Mm
        status: active
        display_name: 王臣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_PQ8tZPbJeKMdQEJOotMrQx
        subject_person_id: p_ZsWbFpaFZ39ZyA6adevEe1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2Gx8pH6sHztKEtkLMN7u1C
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TeR_L00-rqQ-o8mNedfyCK
          claim_id: c_PQ8tZPbJeKMdQEJOotMrQx
          source_id: s_vXt7EfqfhFLQRHs9zkrC1p
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第五十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZsWbFpaFZ39ZyA6adevEe1
        status: active
        display_name: 王嗣祖
        merged_into_person_id: null
    - claim:
        id: c_Z6Hf5mrRp4ofn_3YgNCy36
        subject_person_id: p_UvNQ81spqKpXR9rC6V8ZnV
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2Gx8pH6sHztKEtkLMN7u1C
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OdFzCMDGGGhOJygCrfVJg3
          claim_id: c_Z6Hf5mrRp4ofn_3YgNCy36
          source_id: s_vXt7EfqfhFLQRHs9zkrC1p
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第五十八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UvNQ81spqKpXR9rC6V8ZnV
        status: active
        display_name: 王應哲
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王瑭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑭 | accepted |
| birth.date | 1443年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MbP7H9snAG1vb4zQM8p7Mm | 王臣 | accepted |
| ancestors | p_ZsWbFpaFZ39ZyA6adevEe1 | 王嗣祖 | accepted |
| ancestors | p_UvNQ81spqKpXR9rC6V8ZnV | 王應哲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑭（CBDB 199751）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199751&o=json)
