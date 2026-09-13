---
schema: wang-person/v1
id: p_tc8tLCyEu49sXcAYbw2GP6
status: active
merged_into: null
display_name: 王訚
cbdb_id: 217867
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8sD4qTWa5P6RaqLTg5dZxn
        subject_person_id: p_tc8tLCyEu49sXcAYbw2GP6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訚，明人物。萬曆五年進士。（中国历代人物传记资料库 CBDB 217867）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_gx4qEZQDgBUPkDKL5PcPwL
          claim_id: c_8sD4qTWa5P6RaqLTg5dZxn
          source_id: s_w14uGT4Ny4mX3owuAhJBBW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_w14uGT4Ny4mX3owuAhJBBW
            source_type: api_record
            title: 维基数据：王訚（Q45614438）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45614438
            external_identifier: Q45614438
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:00.338Z
            metadata_json: null
        - id: cs_yyMntTR4Mat6o21M9UEfQS
          claim_id: c_8sD4qTWa5P6RaqLTg5dZxn
          source_id: s_ub9ZomX4NcFY5GpeLj5pja
          stance: supports
          locator: CBDB:217867
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ub9ZomX4NcFY5GpeLj5pja
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王誾（217867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217867&o=json
            external_identifier: CBDB:217867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:00.598Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FicWovrbCr5UWgPN5uS2zR
        subject_person_id: p_tc8tLCyEu49sXcAYbw2GP6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訚
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_p1mrZSWn7siBn7KbKM473z
          claim_id: c_FicWovrbCr5UWgPN5uS2zR
          source_id: s_w14uGT4Ny4mX3owuAhJBBW
          stance: supports
          locator: Q45614438
          quotation: null
          interpretation_note: null
          source:
            id: s_w14uGT4Ny4mX3owuAhJBBW
            source_type: api_record
            title: 维基数据：王訚（Q45614438）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45614438
            external_identifier: Q45614438
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:00.338Z
            metadata_json: null
        - id: cs_xmHrJ24pVtWESewX9denzW
          claim_id: c_FicWovrbCr5UWgPN5uS2zR
          source_id: s_ub9ZomX4NcFY5GpeLj5pja
          stance: supports
          locator: Q45614438
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_M5bq9SaVnG9SCMN7VYTBzj
        subject_person_id: p_gSGT3VNm7ARS5peJbqNALW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tc8tLCyEu49sXcAYbw2GP6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UB3g99M4xz6Y1UWBJybyYa
          claim_id: c_M5bq9SaVnG9SCMN7VYTBzj
          source_id: s_w14uGT4Ny4mX3owuAhJBBW
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_CML4Q2QypBXCZm9ZqpX22g
          claim_id: c_M5bq9SaVnG9SCMN7VYTBzj
          source_id: s_AwUVLy7mrpFTX1RmPK1CbC
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_AwUVLy7mrpFTX1RmPK1CbC
            source_type: api_record
            title: 维基数据：王明（Q45614374）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45614374
            external_identifier: Q45614374
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_gSGT3VNm7ARS5peJbqNALW
        status: active
        display_name: 王明
        merged_into_person_id: null
  children:
    - claim:
        id: c_qEXwpa7cE9Mvzw64eSoNWu
        subject_person_id: p_tc8tLCyEu49sXcAYbw2GP6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zN5CkYRsAqXYKS76qUps77
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PdWKsiMrJ31x8MVgAN54SK
          claim_id: c_qEXwpa7cE9Mvzw64eSoNWu
          source_id: s_V4mjvnm9jPY7ciAUaiPPTh
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_V4mjvnm9jPY7ciAUaiPPTh
            source_type: api_record
            title: 维基数据：王宗果（Q45614499）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45614499
            external_identifier: Q45614499
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:34.983Z
            metadata_json: null
        - id: cs_joXzdtTNLDXUE9wZWJ2TMC
          claim_id: c_qEXwpa7cE9Mvzw64eSoNWu
          source_id: s_w14uGT4Ny4mX3owuAhJBBW
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_zN5CkYRsAqXYKS76qUps77
        status: active
        display_name: 王宗果
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c__8Stv11ss-Es03WX2U3GeN
        subject_person_id: p_tc8tLCyEu49sXcAYbw2GP6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ZHWKRzPsbezhFJuM1r6DbE
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vRxg2tCumYQoGl4-9bm3p7
          claim_id: c__8Stv11ss-Es03WX2U3GeN
          source_id: s_ub9ZomX4NcFY5GpeLj5pja
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第一百六十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZHWKRzPsbezhFJuM1r6DbE
        status: active
        display_name: 王士性
        merged_into_person_id: null
  other: []
---

# 王訚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王訚，明人物。萬曆五年進士。（中国历代人物传记资料库 CBDB 217867） | accepted |
| name.primary | 王訚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gSGT3VNm7ARS5peJbqNALW | 王明 | accepted |
| children | p_zN5CkYRsAqXYKS76qUps77 | 王宗果 | accepted |
| descendants | p_ZHWKRzPsbezhFJuM1r6DbE | 王士性 | accepted |

## 外部来源

- [维基数据：王明（Q45614374）](https://www.wikidata.org/wiki/Q45614374)
- [维基数据：王訚（Q45614438）](https://www.wikidata.org/wiki/Q45614438)
- [维基数据：王宗果（Q45614499）](https://www.wikidata.org/wiki/Q45614499)
- [CBDB 中国历代人物传记资料库：王誾（217867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217867&o=json)
