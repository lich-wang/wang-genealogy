---
schema: wang-person/v1
id: p_REFyGBeMzLA3xAB5YgaYr9
status: active
merged_into: null
display_name: 王銑
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_i9TjwZT4gMxgEoxrrRfhPK
        subject_person_id: p_REFyGBeMzLA3xAB5YgaYr9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q3ZQmYBBKeMBiNQZSCWEiJ
          claim_id: c_i9TjwZT4gMxgEoxrrRfhPK
          source_id: s_MA7bQ66mv7UB2Fi9Zz6T3J
          stance: supports
          locator: CBDB:69399
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69399）
          source: &a1
            id: s_MA7bQ66mv7UB2Fi9Zz6T3J
            source_type: api_record
            title: 中国历代人物传记资料库：王銑（CBDB 69399）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69399&o=json
            external_identifier: CBDB:69399
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.250Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_5CStFxwUW87tsJkuJrQ6Jn
        subject_person_id: p_REFyGBeMzLA3xAB5YgaYr9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1740年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sXz8bEaLYnxoSw6EAdz65d
          claim_id: c_5CStFxwUW87tsJkuJrQ6Jn
          source_id: s_MA7bQ66mv7UB2Fi9Zz6T3J
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
        id: c_hLMs43SuxT2SYQhbQZqNg8
        subject_person_id: p_REFyGBeMzLA3xAB5YgaYr9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1798年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iWZEbPq5BfZorn4fNj3eKf
          claim_id: c_hLMs43SuxT2SYQhbQZqNg8
          source_id: s_MA7bQ66mv7UB2Fi9Zz6T3J
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
        id: c_4tkDiEjM46qeahFa2hVpTQ
        subject_person_id: p_REFyGBeMzLA3xAB5YgaYr9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銑（1740年—1798年），清人物。籍贯武進，身份为死國難，入仕監生，曾任四庫全書館謄錄、縣丞。（中国历代人物传记资料库 CBDB 69399）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8ojFqTe-i8i2xf4bA9l3_7
          claim_id: c_4tkDiEjM46qeahFa2hVpTQ
          source_id: s_MA7bQ66mv7UB2Fi9Zz6T3J
          stance: supports
          locator: CBDB:69399
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Z6_lkk5CNPTVsK4KnoiUlW
        subject_person_id: p_REFyGBeMzLA3xAB5YgaYr9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ceKjZ4gsW42gfQ53Tnqh2E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hb6gBGQROEObuNuI1XAzQs
          claim_id: c_Z6_lkk5CNPTVsK4KnoiUlW
          source_id: s_p2sw8tEXR7UuWq51YiBNDV
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13104：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_p2sw8tEXR7UuWq51YiBNDV
            source_type: api_record
            title: 中国历代人物传记资料库：王韞輝（CBDB 526937）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526937&o=json
            external_identifier: CBDB:526937
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.308Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ceKjZ4gsW42gfQ53Tnqh2E
        status: active
        display_name: 王韞輝
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_xr40GuVCoTo3oOnhuuVNyw
        subject_person_id: p_UX68J8y9oJLXxMUqcXYAXS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_REFyGBeMzLA3xAB5YgaYr9
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0vC9MIPUeXad6uyMIsyVLW
          claim_id: c_xr40GuVCoTo3oOnhuuVNyw
          source_id: s_MA7bQ66mv7UB2Fi9Zz6T3J
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13104：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UX68J8y9oJLXxMUqcXYAXS
        status: active
        display_name: 王綸宣
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王銑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銑 | accepted |
| birth.date | 1740年 | accepted |
| death.date | 1798年 | accepted |
| bio.summary | 王銑（1740年—1798年），清人物。籍贯武進，身份为死國難，入仕監生，曾任四庫全書館謄錄、縣丞。（中国历代人物传记资料库 CBDB 69399） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ceKjZ4gsW42gfQ53Tnqh2E | 王韞輝 | accepted |
| ancestors | p_UX68J8y9oJLXxMUqcXYAXS | 王綸宣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王銑（CBDB 69399）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69399&o=json)
- [中国历代人物传记资料库：王韞輝（CBDB 526937）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526937&o=json)
