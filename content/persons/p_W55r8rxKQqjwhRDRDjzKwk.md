---
schema: wang-person/v1
id: p_W55r8rxKQqjwhRDRDjzKwk
status: active
merged_into: null
display_name: 王浚
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qXWQsKzd23x4TDGSRKJoLs
        subject_person_id: p_W55r8rxKQqjwhRDRDjzKwk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5Fn2K6fmjoWgAyMxjJpCjY
          claim_id: c_qXWQsKzd23x4TDGSRKJoLs
          source_id: s_BgTtrwTzfQ6gjWGNNCaifF
          stance: supports
          locator: CBDB:155478
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（155478）
          source: &a1
            id: s_BgTtrwTzfQ6gjWGNNCaifF
            source_type: api_record
            title: 中国历代人物传记资料库：王浚（CBDB 155478）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155478&o=json
            external_identifier: CBDB:155478
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.877Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3PKiGih87GZFXzSvxxhuUJ
        subject_person_id: p_W55r8rxKQqjwhRDRDjzKwk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浚，唐人物。籍贯瀛州，曾任縣尉。（中国历代人物传记资料库 CBDB 155478）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dQyAuryo1M5z_Qr9TRfq8G
          claim_id: c_3PKiGih87GZFXzSvxxhuUJ
          source_id: s_BgTtrwTzfQ6gjWGNNCaifF
          stance: supports
          locator: CBDB:155478
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kAVFy_JpGdfyd65MwfMTRy
        subject_person_id: p_dW2Y9fcQkf4j5aMn8SBkL4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_W55r8rxKQqjwhRDRDjzKwk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_isqrQFKzr0nqeBibQkP9Xr
          claim_id: c_kAVFy_JpGdfyd65MwfMTRy
          source_id: s_rJgABCHNJnJkpEWjYqbxrA
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rJgABCHNJnJkpEWjYqbxrA
            source_type: api_record
            title: 中国历代人物传记资料库：王釴（CBDB 155486）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155486&o=json
            external_identifier: CBDB:155486
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.880Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dW2Y9fcQkf4j5aMn8SBkL4
        status: active
        display_name: 王釴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王浚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王浚 | accepted |
| bio.summary | 王浚，唐人物。籍贯瀛州，曾任縣尉。（中国历代人物传记资料库 CBDB 155478） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dW2Y9fcQkf4j5aMn8SBkL4 | 王釴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王浚（CBDB 155478）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155478&o=json)
- [中国历代人物传记资料库：王釴（CBDB 155486）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155486&o=json)
