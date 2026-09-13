---
schema: wang-person/v1
id: p_ZHWKRzPsbezhFJuM1r6DbE
status: active
merged_into: null
display_name: 王士性
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xkPMwTRHWBOTkpcPdsqPqk
        subject_person_id: p_ZHWKRzPsbezhFJuM1r6DbE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士性（1547年—1598年），字恒叔，號太初，浙江台州府臨海縣人，民籍，明朝政治人物。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_idOVm19piop8MaXrykYMYD
          claim_id: c_xkPMwTRHWBOTkpcPdsqPqk
          source_id: s_GT3a4letuSZHe6hkrJpu7i
          stance: supports
          locator: 导言
          quotation: 王士性（1547年—1598年），字恒叔，號太初，浙江台州府臨海
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_GT3a4letuSZHe6hkrJpu7i
            source_type: website
            title: 中文维基百科：王士性
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A3%AB%E6%80%A7
            external_identifier: Q15711200
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_cwSR4fhZZGj4HHvbnNptpp
        subject_person_id: p_ZHWKRzPsbezhFJuM1r6DbE
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1546年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 1546-01-01
            latest: 1546-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_34n7WhU7wn1rnn1qLrnsji
          claim_id: c_cwSR4fhZZGj4HHvbnNptpp
          source_id: s_J42Tsy6ZSB9mSGJrACGUgt
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_J42Tsy6ZSB9mSGJrACGUgt
            source_type: api_record
            title: 维基数据：王士性（Q15711200）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15711200
            external_identifier: Q15711200
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:23.438Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_jL2ZwGbJXpB2MyTzHW32c2
        subject_person_id: p_ZHWKRzPsbezhFJuM1r6DbE
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1598年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1598-01-01
            latest: 1598-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ijizfgxbzCo7JAp1Pui2YM
          claim_id: c_jL2ZwGbJXpB2MyTzHW32c2
          source_id: s_J42Tsy6ZSB9mSGJrACGUgt
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_J42Tsy6ZSB9mSGJrACGUgt
            source_type: api_record
            title: 维基数据：王士性（Q15711200）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15711200
            external_identifier: Q15711200
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:23.438Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2WgtcF2dLftAXicNTLZd3U
        subject_person_id: p_ZHWKRzPsbezhFJuM1r6DbE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士性
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_oC6DGJUo1j9kEUeTEZSaVZ
          claim_id: c_2WgtcF2dLftAXicNTLZd3U
          source_id: s_J42Tsy6ZSB9mSGJrACGUgt
          stance: supports
          locator: Q15711200
          quotation: null
          interpretation_note: null
          source:
            id: s_J42Tsy6ZSB9mSGJrACGUgt
            source_type: api_record
            title: 维基数据：王士性（Q15711200）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15711200
            external_identifier: Q15711200
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:23.438Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_u7DVp81f6maoFKKQgUxios
        subject_person_id: p_zN5CkYRsAqXYKS76qUps77
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_ZHWKRzPsbezhFJuM1r6DbE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_M9sR4fVGDG3nHED4oadDry
          claim_id: c_u7DVp81f6maoFKKQgUxios
          source_id: s_J42Tsy6ZSB9mSGJrACGUgt
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_J42Tsy6ZSB9mSGJrACGUgt
            source_type: api_record
            title: 维基数据：王士性（Q15711200）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15711200
            external_identifier: Q15711200
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:23.438Z
            metadata_json: null
        - id: cs_k71TZkxJGCc549ajk8WR91
          claim_id: c_u7DVp81f6maoFKKQgUxios
          source_id: s_V4mjvnm9jPY7ciAUaiPPTh
          stance: supports
          locator: P40（子女）
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
      object_person:
        id: p_zN5CkYRsAqXYKS76qUps77
        status: active
        display_name: 王宗果
        merged_into_person_id: null
  children:
    - claim:
        id: c_PHYXoubcmIqudMeLnXmpFf
        subject_person_id: p_ZHWKRzPsbezhFJuM1r6DbE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xHekMpoEQyryADJWz2qmff
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dpCvT0mf2_hO_U2P4pzEmz
          claim_id: c_PHYXoubcmIqudMeLnXmpFf
          source_id: s_B84tG19fbAZaBR8qXKc9vm
          stance: supports
          locator: 臨海縣志，lgid=353171：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_B84tG19fbAZaBR8qXKc9vm
            source_type: api_record
            title: 中国历代人物传记资料库：王立轂（CBDB 702399）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702399&o=json
            external_identifier: CBDB:702399
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.615Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xHekMpoEQyryADJWz2qmff
        status: active
        display_name: 王立轂
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_tiVjybJP1Qvfw7zzt8rJNF
        subject_person_id: p_SyGzt2QVX9p9429Xmvya6D
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ZHWKRzPsbezhFJuM1r6DbE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_M3SacaKrwJtPd597mac4rQ
          claim_id: c_tiVjybJP1Qvfw7zzt8rJNF
          source_id: s_sYZ3oy79MdJvZVrt5WUmki
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：萬曆五年進士登科錄:一卷
          source:
            id: s_sYZ3oy79MdJvZVrt5WUmki
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王士性（35066）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35066&o=json
            external_identifier: CBDB:35066
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:14.030Z
            metadata_json: null
        - id: cs_XrwU77ECFKhg62VzpKbxoy
          claim_id: c_tiVjybJP1Qvfw7zzt8rJNF
          source_id: s_J42Tsy6ZSB9mSGJrACGUgt
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_J42Tsy6ZSB9mSGJrACGUgt
            source_type: api_record
            title: 维基数据：王士性（Q15711200）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15711200
            external_identifier: Q15711200
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:23.438Z
            metadata_json: null
        - id: cs_xuv9pUKhm2EmxyDrLs5kii
          claim_id: c_tiVjybJP1Qvfw7zzt8rJNF
          source_id: s_KjoN6LFpAuwkH4Wr9CaUZg
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_KjoN6LFpAuwkH4Wr9CaUZg
            source_type: api_record
            title: 维基数据：赵氏（Q65820612）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65820612
            external_identifier: Q65820612
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:34.984Z
            metadata_json: null
      object_person:
        id: p_SyGzt2QVX9p9429Xmvya6D
        status: active
        display_name: 赵氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_XqhZQirKmKPuTLfyiKMSPQ
        subject_person_id: p_gSGT3VNm7ARS5peJbqNALW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ZHWKRzPsbezhFJuM1r6DbE
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r5_APwP7L-jis3zEj2z4E-
          claim_id: c_XqhZQirKmKPuTLfyiKMSPQ
          source_id: s_KaxcQyEUjWPJNvEJZwHUrS
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第一百六十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KaxcQyEUjWPJNvEJZwHUrS
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王明（217866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217866&o=json
            external_identifier: CBDB:217866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_gSGT3VNm7ARS5peJbqNALW
        status: active
        display_name: 王明
        merged_into_person_id: null
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
          source:
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
      object_person:
        id: p_tc8tLCyEu49sXcAYbw2GP6
        status: active
        display_name: 王訚
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王士性

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王士性（1547年—1598年），字恒叔，號太初，浙江台州府臨海縣人，民籍，明朝政治人物。 | accepted |
| birth.date | 1546年 | accepted |
| death.date | 1598年 | accepted |
| name.primary | 王士性 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zN5CkYRsAqXYKS76qUps77 | 王宗果 | accepted |
| children | p_xHekMpoEQyryADJWz2qmff | 王立轂 | accepted |
| spouses | p_SyGzt2QVX9p9429Xmvya6D | 赵氏 | accepted |
| ancestors | p_gSGT3VNm7ARS5peJbqNALW | 王明 | accepted |
| ancestors | p_tc8tLCyEu49sXcAYbw2GP6 | 王訚 | accepted |

## 外部来源

- [维基数据：王士性（Q15711200）](https://www.wikidata.org/wiki/Q15711200)
- [维基数据：王宗果（Q45614499）](https://www.wikidata.org/wiki/Q45614499)
- [维基数据：赵氏（Q65820612）](https://www.wikidata.org/wiki/Q65820612)
- [中国历代人物传记资料库：王立轂（CBDB 702399）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702399&o=json)
- [中文维基百科：王士性](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A3%AB%E6%80%A7)
- [CBDB 中国历代人物传记资料库：王明（217866）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217866&o=json)
- [CBDB 中国历代人物传记资料库：王士性（35066）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35066&o=json)
- [CBDB 中国历代人物传记资料库：王誾（217867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217867&o=json)
