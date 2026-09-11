---
schema: wang-person/v1
id: p_Yjvr1HxMf73RSYqrbeaxV5
status: active
merged_into: null
display_name: 王能
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9rdZrfbfoGeuwPKitGjJ1S
        subject_person_id: p_Yjvr1HxMf73RSYqrbeaxV5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王能
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FeLZ6tjcF2okMLoisTHhy6
          claim_id: c_9rdZrfbfoGeuwPKitGjJ1S
          source_id: s_jz4CpCCDGuT5v6zBrYh8fj
          stance: supports
          locator: CBDB:259340
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（259340）
          source: &a1
            id: s_jz4CpCCDGuT5v6zBrYh8fj
            source_type: api_record
            title: 中国历代人物传记资料库：王能（CBDB 259340）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259340&o=json
            external_identifier: CBDB:259340
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.457Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QefoMEGPgTVcqBwE3nTZt3
        subject_person_id: p_Yjvr1HxMf73RSYqrbeaxV5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王能，明人物。成化二十三年進士，籍贯灤州，曾任七品學官。（中国历代人物传记资料库 CBDB 259340）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_04TNCNoaYnbKCTxlnT51f0
          claim_id: c_QefoMEGPgTVcqBwE3nTZt3
          source_id: s_jz4CpCCDGuT5v6zBrYh8fj
          stance: supports
          locator: CBDB:259340
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_JVhPsTRWi5NKAgraWsXgug
        subject_person_id: p_Yjvr1HxMf73RSYqrbeaxV5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GXh7yMNfU8L5d25yyNJsVi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jZy_8-6PTLLcoaKoAo1g4J
          claim_id: c_JVhPsTRWi5NKAgraWsXgug
          source_id: s_DLSCDCfRKy6NX44hY2nBMq
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第七十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DLSCDCfRKy6NX44hY2nBMq
            source_type: api_record
            title: 中国历代人物传记资料库：王濟（CBDB 200530）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200530&o=json
            external_identifier: CBDB:200530
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.617Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GXh7yMNfU8L5d25yyNJsVi
        status: active
        display_name: 王濟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王能

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王能 | accepted |
| bio.summary | 王能，明人物。成化二十三年進士，籍贯灤州，曾任七品學官。（中国历代人物传记资料库 CBDB 259340） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_GXh7yMNfU8L5d25yyNJsVi | 王濟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王濟（CBDB 200530）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200530&o=json)
- [中国历代人物传记资料库：王能（CBDB 259340）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259340&o=json)
