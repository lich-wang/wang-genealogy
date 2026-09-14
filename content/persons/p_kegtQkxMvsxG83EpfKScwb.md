---
schema: wang-person/v1
id: p_kegtQkxMvsxG83EpfKScwb
status: active
merged_into: null
display_name: 王昂
revision: 6
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
          text: 王昂，明人物。明清進士進士，籍贯廣安州，入仕進士，曾任府推官、縣丞。（中国历代人物传记资料库 CBDB 126608）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0_rNaoMtkIAvm5OL4yc0PN
          claim_id: c_PcXuFeJSMtBtzhV3B7ACP7
          source_id: s_PL27jHSfit3gYzxZJYZ6U9
          stance: supports
          locator: CBDB:126608
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
  other:
    - claim:
        id: c_Qm1XOZMRScTrvRwHh8dRpK
        subject_person_id: p_MEZ9QC7g8rrvbrgdWkJ5Qf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kegtQkxMvsxG83EpfKScwb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ytUjkaihSiMqNoXCA74lcx
          claim_id: c_Qm1XOZMRScTrvRwHh8dRpK
          source_id: s_cEHNWs8zOKo_tRXjBvJ0Uf
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126608 王昂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_cEHNWs8zOKo_tRXjBvJ0Uf
            source_type: api_record
            title: 中国历代人物传记资料库：王斅（CBDB 274343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274343&o=json
            external_identifier: CBDB:274343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MEZ9QC7g8rrvbrgdWkJ5Qf
        status: active
        display_name: 王斅
        merged_into_person_id: null
    - claim:
        id: c_H8DXy0fQunfqDuCrS2p4Vf
        subject_person_id: p_PRSUawoVPuwm3HrkVkH8QH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kegtQkxMvsxG83EpfKScwb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ke_9u1jsmZA0K6M5UqEwB1
          claim_id: c_H8DXy0fQunfqDuCrS2p4Vf
          source_id: s_02hFZWA2E8wD7Zh5-vSsFG
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126608 王昂）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_02hFZWA2E8wD7Zh5-vSsFG
            source_type: api_record
            title: 中国历代人物传记资料库：王翱（CBDB 274342）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274342&o=json
            external_identifier: CBDB:274342
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PRSUawoVPuwm3HrkVkH8QH
        status: active
        display_name: 王翱
        merged_into_person_id: null
---

# 王昂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昂 | accepted |
| bio.summary | 王昂，明人物。明清進士進士，籍贯廣安州，入仕進士，曾任府推官、縣丞。（中国历代人物传记资料库 CBDB 126608） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_soPWG2JxysqfJjV8tB16nV | 王紀綱 | accepted |
| ancestors | p_bCx3m9z1SKJJQgPPe43TNy | 王明 | accepted |
| ancestors | p_QtPAUQJLxbMpt5EG6m8NEq | 王文貴 | accepted |
| other | p_MEZ9QC7g8rrvbrgdWkJ5Qf | 王斅 | accepted |
| other | p_PRSUawoVPuwm3HrkVkH8QH | 王翱 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昂（CBDB 126608）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126608&o=json)
- [中国历代人物传记资料库：王翱（CBDB 274342）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274342&o=json)
- [中国历代人物传记资料库：王紀綱（CBDB 274338）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274338&o=json)
- [中国历代人物传记资料库：王明（CBDB 274337）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274337&o=json)
- [中国历代人物传记资料库：王文貴（CBDB 274336）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274336&o=json)
- [中国历代人物传记资料库：王斅（CBDB 274343）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274343&o=json)
