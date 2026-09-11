---
schema: wang-person/v1
id: p_5HHB1Hb4zKCj9LE68zB5ne
status: active
merged_into: null
display_name: 王文炳
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jNWZ8uh4vdUb3VPKEmtQWQ
        subject_person_id: p_5HHB1Hb4zKCj9LE68zB5ne
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文炳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RLJhEE6FqUiY43cDazgvrN
          claim_id: c_jNWZ8uh4vdUb3VPKEmtQWQ
          source_id: s_mH73qQseyDbuSt264sdqpQ
          stance: supports
          locator: CBDB:126458
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126458）
          source: &a1
            id: s_mH73qQseyDbuSt264sdqpQ
            source_type: api_record
            title: 中国历代人物传记资料库：王文炳（CBDB 126458）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126458&o=json
            external_identifier: CBDB:126458
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.971Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7nH6dBCF66zF55Q38yHFUz
        subject_person_id: p_5HHB1Hb4zKCj9LE68zB5ne
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文炳，明人物。明清進士進士，籍贯廬陵，身份为博學之人，入仕進士。（中国历代人物传记资料库 CBDB 126458）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_u0m74xUW_Q-wmjKQp__8If
          claim_id: c_7nH6dBCF66zF55Q38yHFUz
          source_id: s_mH73qQseyDbuSt264sdqpQ
          stance: supports
          locator: CBDB:126458
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_SSXo7MLjMwSClmhGIjorFi
        subject_person_id: p_pRE8tgS2kdZDvfTt1GWCyR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5HHB1Hb4zKCj9LE68zB5ne
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xRFsuPzksa_cZGy922NGpr
          claim_id: c_SSXo7MLjMwSClmhGIjorFi
          source_id: s_mH73qQseyDbuSt264sdqpQ
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第七十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pRE8tgS2kdZDvfTt1GWCyR
        status: active
        display_name: 王慶環
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Ga-OMOwjqdpYMqmAiAugQm
        subject_person_id: p_5HHB1Hb4zKCj9LE68zB5ne
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_fWDv3QBk1AxnDZ9v9njKTe
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qfn7LPtkrmISEndnD8gOS2
          claim_id: c_Ga-OMOwjqdpYMqmAiAugQm
          source_id: s_DbLIBDnkfLtH6nBhg7B7iM
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第七十四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DbLIBDnkfLtH6nBhg7B7iM
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王文炳妻)（CBDB 316801）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316801&o=json
            external_identifier: CBDB:316801
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fWDv3QBk1AxnDZ9v9njKTe
        status: active
        display_name: 劉氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_RxxdsHy_Nwyi3snCOZ3kHg
        subject_person_id: p_NwosFpCuQh3ufUu48APSSq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5HHB1Hb4zKCj9LE68zB5ne
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YEtSpjLoFNLgQFWmBm0osG
          claim_id: c_RxxdsHy_Nwyi3snCOZ3kHg
          source_id: s_mH73qQseyDbuSt264sdqpQ
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第七十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NwosFpCuQh3ufUu48APSSq
        status: active
        display_name: 王仁聞
        merged_into_person_id: null
    - claim:
        id: c_UPpdArIxHvkA9wBvqGI_2L
        subject_person_id: p_RH36Q687DBQKL7KyTH1YhU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5HHB1Hb4zKCj9LE68zB5ne
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MnW08-JBlK1cXZQogOp_NB
          claim_id: c_UPpdArIxHvkA9wBvqGI_2L
          source_id: s_mH73qQseyDbuSt264sdqpQ
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第七十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RH36Q687DBQKL7KyTH1YhU
        status: active
        display_name: 王惟賢
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王文炳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文炳 | accepted |
| bio.summary | 王文炳，明人物。明清進士進士，籍贯廬陵，身份为博學之人，入仕進士。（中国历代人物传记资料库 CBDB 126458） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pRE8tgS2kdZDvfTt1GWCyR | 王慶環 | accepted |
| spouses | p_fWDv3QBk1AxnDZ9v9njKTe | 劉氏 | accepted |
| ancestors | p_NwosFpCuQh3ufUu48APSSq | 王仁聞 | accepted |
| ancestors | p_RH36Q687DBQKL7KyTH1YhU | 王惟賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王文炳妻)（CBDB 316801）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316801&o=json)
- [中国历代人物传记资料库：王文炳（CBDB 126458）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126458&o=json)
