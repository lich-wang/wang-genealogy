---
schema: wang-person/v1
id: p_4PC2JzRydaXykTknqoVMo5
status: active
merged_into: null
display_name: 王忠
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cUgSxryGYG3JKkFzn2jhu9
        subject_person_id: p_4PC2JzRydaXykTknqoVMo5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j26DWHbjAuPYLNKCyQCoNV
          claim_id: c_cUgSxryGYG3JKkFzn2jhu9
          source_id: s_2e42p38nJLkAsMYS2UdA8i
          stance: supports
          locator: CBDB:126573
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126573）
          source: &a1
            id: s_2e42p38nJLkAsMYS2UdA8i
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 126573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126573&o=json
            external_identifier: CBDB:126573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.033Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_k2FsLLTv5mBPfGV7E1ix1A
        subject_person_id: p_4PC2JzRydaXykTknqoVMo5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠，明人物。景泰二年進士，籍贯武進，身份为孝子/孝女，入仕太學生。（中国历代人物传记资料库 CBDB 126573）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_O3HeNTDTa7mLmr_d54Ru0j
          claim_id: c_k2FsLLTv5mBPfGV7E1ix1A
          source_id: s_2e42p38nJLkAsMYS2UdA8i
          stance: supports
          locator: CBDB:126573
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Pooqa1FNeh6eVQSbi9cR_1
        subject_person_id: p_Q5DgCHGiiyjLBHo197jWHB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4PC2JzRydaXykTknqoVMo5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fisUKzLbpnQ_pNllhFRpAp
          claim_id: c_Pooqa1FNeh6eVQSbi9cR_1
          source_id: s_2e42p38nJLkAsMYS2UdA8i
          stance: supports
          locator: 武進陽湖縣志，lgid=152378：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Q5DgCHGiiyjLBHo197jWHB
        status: active
        display_name: 王友諒
        merged_into_person_id: null
  children:
    - claim:
        id: c__DVcSrWOjQ9GeGBuk2gv09
        subject_person_id: p_4PC2JzRydaXykTknqoVMo5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MiT45BEZABeDdxC6DUoAF7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zz1uuTGr4ZfydGU_PcJviT
          claim_id: c__DVcSrWOjQ9GeGBuk2gv09
          source_id: s_2e42p38nJLkAsMYS2UdA8i
          stance: supports
          locator: 江南通志，lgid=65779：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MiT45BEZABeDdxC6DUoAF7
        status: active
        display_name: 王㒜
        merged_into_person_id: null
    - claim:
        id: c_8z435cHR_nicNXHqO2Ny0A
        subject_person_id: p_4PC2JzRydaXykTknqoVMo5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Az5Rxcc1h3eSbemqTjYy8x
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5s3kGRRHAa8Wd1hBuwx-AW
          claim_id: c_8z435cHR_nicNXHqO2Ny0A
          source_id: s_6hAds4Olpj5iEGGbnkCMg_
          stance: supports
          locator: CBDB：兄弟 王㒜（126815）之父／母 王忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王儒 与 王㒜 为同胞（CBDB 记「弟」），王㒜 之父／母即 王儒 之父／母。
          source:
            id: s_6hAds4Olpj5iEGGbnkCMg_
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 245852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245852&o=json
            external_identifier: CBDB:245852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Az5Rxcc1h3eSbemqTjYy8x
        status: active
        display_name: 王儒
        merged_into_person_id: null
    - claim:
        id: c_JSASrCBUaTUlvIDMm3ouN6
        subject_person_id: p_4PC2JzRydaXykTknqoVMo5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FZXqNCAYwxbaNN1ABDTDqt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8DgFOaXnkOw6xv4pIPhc2F
          claim_id: c_JSASrCBUaTUlvIDMm3ouN6
          source_id: s_pHUVApfJQ_WxyGTDc-u7-l
          stance: supports
          locator: CBDB：兄弟 王㒜（126815）之父／母 王忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王倫 与 王㒜 为同胞（CBDB 记「弟」），王㒜 之父／母即 王倫 之父／母。
          source:
            id: s_pHUVApfJQ_WxyGTDc-u7-l
            source_type: api_record
            title: 中国历代人物传记资料库：王倫（CBDB 245518）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245518&o=json
            external_identifier: CBDB:245518
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FZXqNCAYwxbaNN1ABDTDqt
        status: active
        display_name: 王倫
        merged_into_person_id: null
    - claim:
        id: c_KqE-8K6cgauvGHjPfSD6Tj
        subject_person_id: p_4PC2JzRydaXykTknqoVMo5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UvUJEs7qb7FsNRsMJazCGa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PlbRFZz3YJbgtjsA5yfqbA
          claim_id: c_KqE-8K6cgauvGHjPfSD6Tj
          source_id: s_EVT0rH-o7OHia_sjRuhHMy
          stance: supports
          locator: CBDB：兄弟 王㒜（126815）之父／母 王忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王俊 与 王㒜 为同胞（CBDB 记「弟」），王㒜 之父／母即 王俊 之父／母。
          source:
            id: s_EVT0rH-o7OHia_sjRuhHMy
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 245296）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245296&o=json
            external_identifier: CBDB:245296
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UvUJEs7qb7FsNRsMJazCGa
        status: active
        display_name: 王俊
        merged_into_person_id: null
    - claim:
        id: c_6K_MmKJ-GXF8MaQYg-C0Ix
        subject_person_id: p_4PC2JzRydaXykTknqoVMo5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nwvPWjotHBdriKp9kFA9Nq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rR_1tc-pOWgOZYz30V5gST
          claim_id: c_6K_MmKJ-GXF8MaQYg-C0Ix
          source_id: s_p62BAug1juSlD_lot1IdiU
          stance: supports
          locator: CBDB：兄弟 王㒜（126815）之父／母 王忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王侃 与 王㒜 为同胞（CBDB 记「弟」），王㒜 之父／母即 王侃 之父／母。
          source:
            id: s_p62BAug1juSlD_lot1IdiU
            source_type: api_record
            title: 中国历代人物传记资料库：王侃（CBDB 245629）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245629&o=json
            external_identifier: CBDB:245629
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nwvPWjotHBdriKp9kFA9Nq
        status: active
        display_name: 王侃
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王忠 | accepted |
| bio.summary | 王忠，明人物。景泰二年進士，籍贯武進，身份为孝子/孝女，入仕太學生。（中国历代人物传记资料库 CBDB 126573） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Q5DgCHGiiyjLBHo197jWHB | 王友諒 | accepted |
| children | p_MiT45BEZABeDdxC6DUoAF7 | 王㒜 | accepted |
| children | p_Az5Rxcc1h3eSbemqTjYy8x | 王儒 | accepted |
| children | p_FZXqNCAYwxbaNN1ABDTDqt | 王倫 | accepted |
| children | p_UvUJEs7qb7FsNRsMJazCGa | 王俊 | accepted |
| children | p_nwvPWjotHBdriKp9kFA9Nq | 王侃 | accepted |

## 外部来源

- [中国历代人物传记资料库：王俊（CBDB 245296）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245296&o=json)
- [中国历代人物传记资料库：王侃（CBDB 245629）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245629&o=json)
- [中国历代人物传记资料库：王倫（CBDB 245518）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245518&o=json)
- [中国历代人物传记资料库：王儒（CBDB 245852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245852&o=json)
- [中国历代人物传记资料库：王忠（CBDB 126573）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126573&o=json)
