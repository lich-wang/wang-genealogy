---
schema: wang-person/v1
id: p_kegtQkxMvsxG83EpfKScwb
status: active
merged_into: null
display_name: 王昂
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SAxq9Kc7mR9nEanH3kv1n4
        subject_person_id: p_kegtQkxMvsxG83EpfKScwb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Abwe7gjmPrwrqprXvvpnRj
          claim_id: c_SAxq9Kc7mR9nEanH3kv1n4
          source_id: s_PL27jHSfit3gYzxZJYZ6U9
          stance: supports
          locator: CBDB:126608
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126608）
          source: &a1
            id: s_PL27jHSfit3gYzxZJYZ6U9
            source_type: api_record
            title: 中国历代人物传记资料库：王昂（CBDB 126608）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126608&o=json
            external_identifier: CBDB:126608
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.055Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PcXuFeJSMtBtzhV3B7ACP7
        subject_person_id: p_kegtQkxMvsxG83EpfKScwb
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
        - id: cs_8UUmJaRKgBAqUYAZKvwgEw
          claim_id: c_PcXuFeJSMtBtzhV3B7ACP7
          source_id: s_PL27jHSfit3gYzxZJYZ6U9
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
        id: c_hvcBGueYHsjVANiw3xnE0O
        subject_person_id: p_soPWG2JxysqfJjV8tB16nV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kegtQkxMvsxG83EpfKScwb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8dpjjcdFBdzlbV7mAadnuI
          claim_id: c_hvcBGueYHsjVANiw3xnE0O
          source_id: s_ACEqbZyCp1oBaqkEBZRKE3
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第六十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ACEqbZyCp1oBaqkEBZRKE3
            source_type: api_record
            title: 中国历代人物传记资料库：王紀綱（CBDB 274338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274338&o=json
            external_identifier: CBDB:274338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_soPWG2JxysqfJjV8tB16nV
        status: active
        display_name: 王紀綱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_rTY9WrH25phLT2-qqd0MaO
        subject_person_id: p_bCx3m9z1SKJJQgPPe43TNy
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kegtQkxMvsxG83EpfKScwb
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JAoTUHu__zrqv5GOQK0eeA
          claim_id: c_rTY9WrH25phLT2-qqd0MaO
          source_id: s_iNSAmRV4GFJcDnvqyAQD9p
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第六十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_iNSAmRV4GFJcDnvqyAQD9p
            source_type: api_record
            title: 中国历代人物传记资料库：王明（CBDB 274337）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274337&o=json
            external_identifier: CBDB:274337
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.922Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bCx3m9z1SKJJQgPPe43TNy
        status: active
        display_name: 王明
        merged_into_person_id: null
    - claim:
        id: c_uRj3fAMo0s0l9tfz4xtyfB
        subject_person_id: p_QtPAUQJLxbMpt5EG6m8NEq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kegtQkxMvsxG83EpfKScwb
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d-HpKYeBsvwEZG_XswlY5-
          claim_id: c_uRj3fAMo0s0l9tfz4xtyfB
          source_id: s_iHunMM7feZ92sAgAAXzRQ3
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第六十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_iHunMM7feZ92sAgAAXzRQ3
            source_type: api_record
            title: 中国历代人物传记资料库：王文貴（CBDB 274336）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274336&o=json
            external_identifier: CBDB:274336
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.921Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QtPAUQJLxbMpt5EG6m8NEq
        status: active
        display_name: 王文貴
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王昂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昂 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_soPWG2JxysqfJjV8tB16nV | 王紀綱 | accepted |
| ancestors | p_bCx3m9z1SKJJQgPPe43TNy | 王明 | accepted |
| ancestors | p_QtPAUQJLxbMpt5EG6m8NEq | 王文貴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昂（CBDB 126608）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126608&o=json)
- [中国历代人物传记资料库：王紀綱（CBDB 274338）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274338&o=json)
- [中国历代人物传记资料库：王明（CBDB 274337）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274337&o=json)
- [中国历代人物传记资料库：王文貴（CBDB 274336）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274336&o=json)
