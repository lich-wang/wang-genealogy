---
schema: wang-person/v1
id: p_2LZsVShN931yXZMrQr8ka2
status: active
merged_into: null
display_name: 王家屏
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3J7HLGH1QCNBdeYKU5dZSP
        subject_person_id: p_2LZsVShN931yXZMrQr8ka2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家屏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3EHwxTQtzW1BM99PuvBgr7
          claim_id: c_3J7HLGH1QCNBdeYKU5dZSP
          source_id: s_eCqLAt765eqmLNLZCcUgSa
          stance: supports
          locator: CBDB:123935
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（123935）
          source: &a1
            id: s_eCqLAt765eqmLNLZCcUgSa
            source_type: api_record
            title: 中国历代人物传记资料库：王家屏（CBDB 123935）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123935&o=json
            external_identifier: CBDB:123935
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.939Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_tDHN1xGyQzucNDZWhdqHGN
        subject_person_id: p_2LZsVShN931yXZMrQr8ka2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1536年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5zArXbdiQBeARHXh9jQB71
          claim_id: c_tDHN1xGyQzucNDZWhdqHGN
          source_id: s_eCqLAt765eqmLNLZCcUgSa
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
        id: c_gEk3qVhpGjE7i3zuKWAt8A
        subject_person_id: p_2LZsVShN931yXZMrQr8ka2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1603年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UF2Hr8qNEVo4Nix1VWavoi
          claim_id: c_gEk3qVhpGjE7i3zuKWAt8A
          source_id: s_eCqLAt765eqmLNLZCcUgSa
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
        id: c_1ScV7LZV1c2P1kobaAdZQ5
        subject_person_id: p_2LZsVShN931yXZMrQr8ka2
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
        - id: cs_KgCnBr8hB6MBSkYFk8aKUb
          claim_id: c_1ScV7LZV1c2P1kobaAdZQ5
          source_id: s_eCqLAt765eqmLNLZCcUgSa
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
        id: c_qM9d5SGfeNGLxnA6XttNaO
        subject_person_id: p_2LZsVShN931yXZMrQr8ka2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1iXYH9rLF83DNfU7T3VWBN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xODyBUV6IiH0TjqcTJDxhj
          claim_id: c_qM9d5SGfeNGLxnA6XttNaO
          source_id: s_DdxHPH8zygcEjqhPQKLu1D
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13619：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DdxHPH8zygcEjqhPQKLu1D
            source_type: api_record
            title: 中国历代人物传记资料库：王瀹初（CBDB 527384）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527384&o=json
            external_identifier: CBDB:527384
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.347Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1iXYH9rLF83DNfU7T3VWBN
        status: active
        display_name: 王瀹初
        merged_into_person_id: null
    - claim:
        id: c_PuLrybaLD2VUpKzmgFUREA
        subject_person_id: p_2LZsVShN931yXZMrQr8ka2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RpKKxnAZP6PhYn3M1e9p7D
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JmVBVcWRIXxU28BMKIXRCB
          claim_id: c_PuLrybaLD2VUpKzmgFUREA
          source_id: s_eCqLAt765eqmLNLZCcUgSa
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13619：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RpKKxnAZP6PhYn3M1e9p7D
        status: active
        display_name: 王湛初
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_SJZq811rOGCJRyPcOuIbz4
        subject_person_id: p_2tigx8wrtYVEky82kcH7xs
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2LZsVShN931yXZMrQr8ka2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8HFTDZ-WxGpN5k0Fzlh7nG
          claim_id: c_SJZq811rOGCJRyPcOuIbz4
          source_id: s_eCqLAt765eqmLNLZCcUgSa
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13619：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2tigx8wrtYVEky82kcH7xs
        status: active
        display_name: 王石溪
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王家屏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家屏 | accepted |
| birth.date | 1536年 | accepted |
| death.date | 1603年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_1iXYH9rLF83DNfU7T3VWBN | 王瀹初 | accepted |
| children | p_RpKKxnAZP6PhYn3M1e9p7D | 王湛初 | accepted |
| ancestors | p_2tigx8wrtYVEky82kcH7xs | 王石溪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王家屏（CBDB 123935）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123935&o=json)
- [中国历代人物传记资料库：王瀹初（CBDB 527384）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527384&o=json)
