---
schema: wang-person/v1
id: p_HjMSGWaaseFRH9Rnqfpx53
status: active
merged_into: null
display_name: 王守礼
cbdb_id: 288233
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LoVMLB6imJ865Dh3zhkutn
        subject_person_id: p_HjMSGWaaseFRH9Rnqfpx53
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守礼，明人物。CBDB 记录其籍贯记录为餘姚。中国历代人物传记资料库（CBDB）以人物编号 288233 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_jrN6PHXjENjt7v7pKoo2fY
          claim_id: c_LoVMLB6imJ865Dh3zhkutn
          source_id: s_6Uh3rMjkBqDnWEwu7o21mM
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_6Uh3rMjkBqDnWEwu7o21mM
            source_type: api_record
            title: 维基数据：王守礼（Q45444931）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45444931
            external_identifier: Q45444931
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:45.400Z
            metadata_json: null
        - id: cs__e83bok4emrFC--SN92kfF
          claim_id: c_LoVMLB6imJ865Dh3zhkutn
          source_id: s_4EV6s8PDZDPriF5mknCM8A
          stance: supports
          locator: CBDB:288233
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_4EV6s8PDZDPriF5mknCM8A
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王守禮（288233）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288233&o=json
            external_identifier: CBDB:288233
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:14:45.550Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7EiGUQaVx12448CJNePNj9
        subject_person_id: p_HjMSGWaaseFRH9Rnqfpx53
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守礼
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5BitDkigQygeVnoSG5kPhN
          claim_id: c_7EiGUQaVx12448CJNePNj9
          source_id: s_6Uh3rMjkBqDnWEwu7o21mM
          stance: supports
          locator: Q45444931
          quotation: null
          interpretation_note: null
          source:
            id: s_6Uh3rMjkBqDnWEwu7o21mM
            source_type: api_record
            title: 维基数据：王守礼（Q45444931）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45444931
            external_identifier: Q45444931
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:45.400Z
            metadata_json: null
        - id: cs_BXT9HsBcTFUN4978PuNLG8
          claim_id: c_7EiGUQaVx12448CJNePNj9
          source_id: s_4EV6s8PDZDPriF5mknCM8A
          stance: supports
          locator: Q45444931
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8XeXmvbJobuj7Nvk16wqLb
        subject_person_id: p_ykr41UEw3NbJSps62ktjHo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HjMSGWaaseFRH9Rnqfpx53
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_VTqdLDtoiY1mB5Yury5rr7
          claim_id: c_8XeXmvbJobuj7Nvk16wqLb
          source_id: s_TDLFnsGss2TjAWXKEcVNuf
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_TDLFnsGss2TjAWXKEcVNuf
            source_type: api_record
            title: 维基数据：王衮（Q45444868）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45444868
            external_identifier: Q45444868
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:11.042Z
            metadata_json: null
        - id: cs_qgWUASbbo3T945PhMnjSYq
          claim_id: c_8XeXmvbJobuj7Nvk16wqLb
          source_id: s_6Uh3rMjkBqDnWEwu7o21mM
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_6Uh3rMjkBqDnWEwu7o21mM
            source_type: api_record
            title: 维基数据：王守礼（Q45444931）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45444931
            external_identifier: Q45444931
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:45.400Z
            metadata_json: null
      object_person:
        id: p_ykr41UEw3NbJSps62ktjHo
        status: active
        display_name: 王衮
        merged_into_person_id: null
  children:
    - claim:
        id: c_4Sn2c8oKUaecp9d5occySn
        subject_person_id: p_HjMSGWaaseFRH9Rnqfpx53
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qfyAqTA3PGUUXcgAsCUJEh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Jn1RBTcFBqD2CgQK7JL3BF
          claim_id: c_4Sn2c8oKUaecp9d5occySn
          source_id: s_6Uh3rMjkBqDnWEwu7o21mM
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_6Uh3rMjkBqDnWEwu7o21mM
            source_type: api_record
            title: 维基数据：王守礼（Q45444931）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45444931
            external_identifier: Q45444931
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:45.400Z
            metadata_json: null
        - id: cs_x1sGPkHNaiGmfxqGVNBMKH
          claim_id: c_4Sn2c8oKUaecp9d5occySn
          source_id: s_4EV6s8PDZDPriF5mknCM8A
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：嘉靖八年進士登科錄:一卷
          source:
            id: s_4EV6s8PDZDPriF5mknCM8A
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王守禮（288233）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288233&o=json
            external_identifier: CBDB:288233
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:14:45.550Z
            metadata_json: null
        - id: cs_JoCuH918tEJ5QyzhvzcHNc
          claim_id: c_4Sn2c8oKUaecp9d5occySn
          source_id: s_KJHBKoaT55PZNcFJGfSbn2
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_KJHBKoaT55PZNcFJGfSbn2
            source_type: api_record
            title: 维基数据：王正思（Q16077354）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077354
            external_identifier: Q16077354
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:10.844Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%AD%A3%E6%80%9D
        - id: cs_4dR4kAPdtNwxtBjBHPJ7R5
          claim_id: c_4Sn2c8oKUaecp9d5occySn
          source_id: s_ciu1UrQeyrub6PGojXTZRW
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：嘉靖八年進士登科錄:一卷
          source:
            id: s_ciu1UrQeyrub6PGojXTZRW
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王正思（202442）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202442&o=json
            external_identifier: CBDB:202442
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:18:11.006Z
            metadata_json: null
        - id: cs_Dek7UZLsJMmMKNkiwJHMVJ
          claim_id: c_4Sn2c8oKUaecp9d5occySn
          source_id: s_TSfso3FrCBgfNR2hHscAz3
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 曾祖王天敘，以孫王守仁贈禮部右侍郎追封特進光祿大夫柱國新建伯兼南京兵部尚書；祖父王袞；父王守禮，母華氏
          interpretation_note: null
          source:
            id: s_TSfso3FrCBgfNR2hHscAz3
            source_type: website
            title: 中文维基百科：王正思
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%AD%A3%E6%80%9D
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:27:22.455Z
            metadata_json: null
      object_person:
        id: p_qfyAqTA3PGUUXcgAsCUJEh
        status: active
        display_name: 王正思
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王守礼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王守礼，明人物。CBDB 记录其籍贯记录为餘姚。中国历代人物传记资料库（CBDB）以人物编号 288233 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王守礼 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ykr41UEw3NbJSps62ktjHo | 王衮 | accepted |
| children | p_qfyAqTA3PGUUXcgAsCUJEh | 王正思 | accepted |

## 外部来源

- [维基数据：王衮（Q45444868）](https://www.wikidata.org/wiki/Q45444868)
- [维基数据：王守礼（Q45444931）](https://www.wikidata.org/wiki/Q45444931)
- [维基数据：王正思（Q16077354）](https://www.wikidata.org/wiki/Q16077354)
- [中文维基百科：王正思](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%AD%A3%E6%80%9D)
- [CBDB 中国历代人物传记资料库：王守禮（288233）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288233&o=json)
- [CBDB 中国历代人物传记资料库：王正思（202442）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202442&o=json)
