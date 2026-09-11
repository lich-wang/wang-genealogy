---
schema: wang-person/v1
id: p_vwcVcqrGAsMahMr49PPDye
status: active
merged_into: null
display_name: 王繼英
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ymL54ZKHekj32YuJVspWsj
        subject_person_id: p_vwcVcqrGAsMahMr49PPDye
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_y7pz1fVb2KhaNvDhL1xVaH
          claim_id: c_ymL54ZKHekj32YuJVspWsj
          source_id: s_TNwtkHb9nGfxutCBdXS7ZT
          stance: supports
          locator: CBDB:8144
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（8144）
          source: &a1
            id: s_TNwtkHb9nGfxutCBdXS7ZT
            source_type: api_record
            title: 中国历代人物传记资料库：王繼英（CBDB 8144）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8144&o=json
            external_identifier: CBDB:8144
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.489Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9iuTPwaGKFhQcyFk3An8Wy
        subject_person_id: p_vwcVcqrGAsMahMr49PPDye
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 946年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7TFYtxo6PEF2FuvDyoVQNh
          claim_id: c_9iuTPwaGKFhQcyFk3An8Wy
          source_id: s_TNwtkHb9nGfxutCBdXS7ZT
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
        id: c_AHCeLFqYM15aUmc3cNMH1K
        subject_person_id: p_vwcVcqrGAsMahMr49PPDye
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1006年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nPGHN2U7ZQYYHwo4pZnKD1
          claim_id: c_AHCeLFqYM15aUmc3cNMH1K
          source_id: s_TNwtkHb9nGfxutCBdXS7ZT
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
        id: c_u6wZdCFQS24wRsBZXU7Nou
        subject_person_id: p_vwcVcqrGAsMahMr49PPDye
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
        - id: cs_6pVdyHFvFVrKNENSh4Pp5C
          claim_id: c_u6wZdCFQS24wRsBZXU7Nou
          source_id: s_TNwtkHb9nGfxutCBdXS7ZT
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
        id: c_833evEv7l8hvXGXfjx2U8s
        subject_person_id: p_vwcVcqrGAsMahMr49PPDye
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vN3Wx2xwK2VjccJAXJQfxN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m6q9GKPx8BOJJ8-Z7erJoi
          claim_id: c_833evEv7l8hvXGXfjx2U8s
          source_id: s_ed5wt6QnJo1HX9wQVKaT8z
          stance: supports
          locator: 宋史：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ed5wt6QnJo1HX9wQVKaT8z
            source_type: api_record
            title: 中国历代人物传记资料库：王遵度（CBDB 98043）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=98043&o=json
            external_identifier: CBDB:98043
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.303Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_vN3Wx2xwK2VjccJAXJQfxN
        status: active
        display_name: 王遵度
        merged_into_person_id: null
    - claim:
        id: c_woJVql3S_3kDsB42hKzdsd
        subject_person_id: p_vwcVcqrGAsMahMr49PPDye
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9nbVx1Fhdv4jLZaXCCiW8z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-ckpkKymxJJ9ZHNFwtRFAQ
          claim_id: c_woJVql3S_3kDsB42hKzdsd
          source_id: s_9pPGNUSJq4f265yCfrCcpq
          stance: supports
          locator: 宋史：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9pPGNUSJq4f265yCfrCcpq
            source_type: api_record
            title: 中国历代人物传记资料库：王遵誨（CBDB 45706）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45706&o=json
            external_identifier: CBDB:45706
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:47.307Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_9nbVx1Fhdv4jLZaXCCiW8z
        status: active
        display_name: 王遵誨
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王繼英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼英 | accepted |
| birth.date | 946年 | accepted |
| death.date | 1006年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_vN3Wx2xwK2VjccJAXJQfxN | 王遵度 | accepted |
| children | p_9nbVx1Fhdv4jLZaXCCiW8z | 王遵誨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繼英（CBDB 8144）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8144&o=json)
- [中国历代人物传记资料库：王遵度（CBDB 98043）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=98043&o=json)
- [中国历代人物传记资料库：王遵誨（CBDB 45706）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45706&o=json)
