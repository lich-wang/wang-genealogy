---
schema: wang-person/v1
id: p_CfBg4EkiVZYyTKeny1Eajm
status: active
merged_into: null
display_name: 王元節
cbdb_id: 28880
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VKHRXXQSQQDL43G3Nbz8HA
        subject_person_id: p_CfBg4EkiVZYyTKeny1Eajm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元節，金人物。中国历代人物传记资料库（CBDB）以人物编号 28880 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_bEm2sFU_wh93tHpHbXPkvL
          claim_id: c_VKHRXXQSQQDL43G3Nbz8HA
          source_id: s_fdZGe1EFnVasDQRBiLkXUY
          stance: supports
          locator: CBDB:28880
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_fdZGe1EFnVasDQRBiLkXUY
            source_type: api_record
            title: 中国历代人物传记资料库：王元節（CBDB 28880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28880&o=json
            external_identifier: CBDB:28880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qfq6K23rKasBSM7w3ojEFy
        subject_person_id: p_CfBg4EkiVZYyTKeny1Eajm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元節
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PwsGeEQrv5tZQaphKZkuED
          claim_id: c_qfq6K23rKasBSM7w3ojEFy
          source_id: s_fdZGe1EFnVasDQRBiLkXUY
          stance: supports
          locator: CBDB:28880
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 金
          source:
            id: s_fdZGe1EFnVasDQRBiLkXUY
            source_type: api_record
            title: 中国历代人物传记资料库：王元節（CBDB 28880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28880&o=json
            external_identifier: CBDB:28880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vsbxn225jgfxkIH8RkF4u4
        subject_person_id: p_qCuaUyH1y45aEnsbXbyLvR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CfBg4EkiVZYyTKeny1Eajm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__nx6aqCVnDeqGRTJWx-eLH
          claim_id: c_vsbxn225jgfxkIH8RkF4u4
          source_id: s_i6X9iDAnkvtohn8BPaz8VK
          stance: supports
          locator: CBDB 双向互证（子 王元節 ⇄ 父 王詡）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_i6X9iDAnkvtohn8BPaz8VK
            source_type: api_record
            title: 中国历代人物传记资料库：王詡（CBDB 28881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28881&o=json
            external_identifier: CBDB:28881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.984Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_qCuaUyH1y45aEnsbXbyLvR
        status: active
        display_name: 王詡
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_9KzZskEkwPRl2-DR5Y73fY
        subject_person_id: p_CfBg4EkiVZYyTKeny1Eajm
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_QwwT5psiYNqVNMCf3n8cmj
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZeJjwGt4iOUX-wp43a8Ds2
          claim_id: c_9KzZskEkwPRl2-DR5Y73fY
          source_id: s_fdZGe1EFnVasDQRBiLkXUY
          stance: supports
          locator: CBDB 双向互证（孫 王國剛 ⇄ 祖父 王元節）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_QwwT5psiYNqVNMCf3n8cmj
        status: active
        display_name: 王國剛
        merged_into_person_id: null
  other: []
---

# 王元節

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王元節，金人物。中国历代人物传记资料库（CBDB）以人物编号 28880 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王元節 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qCuaUyH1y45aEnsbXbyLvR | 王詡 | accepted |
| descendants | p_QwwT5psiYNqVNMCf3n8cmj | 王國剛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王詡（CBDB 28881）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28881&o=json)
- [中国历代人物传记资料库：王元節（CBDB 28880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28880&o=json)
