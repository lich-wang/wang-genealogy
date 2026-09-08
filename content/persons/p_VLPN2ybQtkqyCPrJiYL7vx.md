---
schema: wang-person/v1
id: p_VLPN2ybQtkqyCPrJiYL7vx
status: active
merged_into: null
display_name: 王之辅
cbdb_id: 227717
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_viDYbaoXE9Wh79SAGrQX9q
        subject_person_id: p_VLPN2ybQtkqyCPrJiYL7vx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王之辅，明人物。CBDB 记录其籍贯记录为蒙陰，入仕记录为學校: 生員(庠生)。中国历代人物传记资料库（CBDB）以人物编号 227717 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_KMMLM5gPtWcdbMGKmEtafX
          claim_id: c_viDYbaoXE9Wh79SAGrQX9q
          source_id: s_HkowMqAvcFAYwo6YGrYb5f
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_HkowMqAvcFAYwo6YGrYb5f
            source_type: api_record
            title: 维基数据：王之辅（Q16075319）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16075319
            external_identifier: Q16075319
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:58.503Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B9%8B%E8%BC%94
        - id: cs__gwvpceqVFkWXZG7rUkWH2
          claim_id: c_viDYbaoXE9Wh79SAGrQX9q
          source_id: s_Hvv7DyDri2JtmhRxc6FSqg
          stance: supports
          locator: CBDB:227717
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Hvv7DyDri2JtmhRxc6FSqg
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王之輔（227717）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227717&o=json
            external_identifier: CBDB:227717
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:58.672Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_saxZDyQvSKSzmVZZ9JjbEM
        subject_person_id: p_VLPN2ybQtkqyCPrJiYL7vx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之辅
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6KBVBKAUqgyfoAEK9nHw3b
          claim_id: c_saxZDyQvSKSzmVZZ9JjbEM
          source_id: s_Hvv7DyDri2JtmhRxc6FSqg
          stance: supports
          locator: Q16075319
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_Q1Fk9wzzxENazjrYcDowL4
          claim_id: c_saxZDyQvSKSzmVZZ9JjbEM
          source_id: s_HkowMqAvcFAYwo6YGrYb5f
          stance: supports
          locator: Q16075319
          quotation: null
          interpretation_note: null
          source:
            id: s_HkowMqAvcFAYwo6YGrYb5f
            source_type: api_record
            title: 维基数据：王之辅（Q16075319）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16075319
            external_identifier: Q16075319
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:58.503Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B9%8B%E8%BC%94
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mworeDkwiy3aSPPFGW7ajF
        subject_person_id: p_2XaF6KrMwGSDeaU76DAGrz
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_VLPN2ybQtkqyCPrJiYL7vx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FiUt9SfqnZ6fbPSjK9T6QK
          claim_id: c_mworeDkwiy3aSPPFGW7ajF
          source_id: s_8v97D6aRgy5zRhLaWeAPgN
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_8v97D6aRgy5zRhLaWeAPgN
            source_type: api_record
            title: 维基数据：王重光（Q15935070）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15935070
            external_identifier: Q15935070
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:33.095Z
            metadata_json: null
        - id: cs_tNdb7fPKxfV8EeBXQP1rDH
          claim_id: c_mworeDkwiy3aSPPFGW7ajF
          source_id: s_HkowMqAvcFAYwo6YGrYb5f
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_HkowMqAvcFAYwo6YGrYb5f
            source_type: api_record
            title: 维基数据：王之辅（Q16075319）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16075319
            external_identifier: Q16075319
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:58.503Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B9%8B%E8%BC%94
      object_person:
        id: p_2XaF6KrMwGSDeaU76DAGrz
        status: active
        display_name: 王重光
        merged_into_person_id: null
  children:
    - claim:
        id: c_EPFzM2CVBxyADZ1wsqLgGS
        subject_person_id: p_VLPN2ybQtkqyCPrJiYL7vx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8ZxmoUk6pXaC7TDzaGpcdx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5Hfr2Xu1GnWmig6UtYvH9K
          claim_id: c_EPFzM2CVBxyADZ1wsqLgGS
          source_id: s_HkowMqAvcFAYwo6YGrYb5f
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_HkowMqAvcFAYwo6YGrYb5f
            source_type: api_record
            title: 维基数据：王之辅（Q16075319）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16075319
            external_identifier: Q16075319
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:58.503Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B9%8B%E8%BC%94
        - id: cs_R8G445cRFoLGNvZn4Eok1S
          claim_id: c_EPFzM2CVBxyADZ1wsqLgGS
          source_id: s_5u7j1eP4WzA9gyttQHGv1D
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_5u7j1eP4WzA9gyttQHGv1D
            source_type: api_record
            title: 维基数据：王象斗（Q16075433）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16075433
            external_identifier: Q16075433
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:52.049Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B1%A1%E6%96%97
      object_person:
        id: p_8ZxmoUk6pXaC7TDzaGpcdx
        status: active
        display_name: 王象斗
        merged_into_person_id: null
    - claim:
        id: c_t77RN6xcQGP2N7ev4pEch7
        subject_person_id: p_VLPN2ybQtkqyCPrJiYL7vx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6VHJbLTrkCw69Y2Ho1sBH7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZUbgZqbr94hvBoEvj4kVgX
          claim_id: c_t77RN6xcQGP2N7ev4pEch7
          source_id: s_HkowMqAvcFAYwo6YGrYb5f
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_dL8q3E95rdcorBNANJ5ekG
          claim_id: c_t77RN6xcQGP2N7ev4pEch7
          source_id: s_U8yRY4uN6P8k7auZnEUPKq
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_U8yRY4uN6P8k7auZnEUPKq
            source_type: api_record
            title: 维基数据：王象节（Q16075437）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16075437
            external_identifier: Q16075437
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:52.050Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B1%A1%E7%AF%80
      object_person:
        id: p_6VHJbLTrkCw69Y2Ho1sBH7
        status: active
        display_name: 王象节
        merged_into_person_id: null
    - claim:
        id: c_HQd1y4JpN62jWCE8R1ANwL
        subject_person_id: p_VLPN2ybQtkqyCPrJiYL7vx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UCuWmdu88wkXMEGK9geKmL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NtA1LGCBXXUxZTMQG7E5fk
          claim_id: c_HQd1y4JpN62jWCE8R1ANwL
          source_id: s_HkowMqAvcFAYwo6YGrYb5f
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_ra5d415KHHNV67vifC8FL7
          claim_id: c_HQd1y4JpN62jWCE8R1ANwL
          source_id: s_zLJ9Hfx1NHziz4NGzxh4Dr
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_zLJ9Hfx1NHziz4NGzxh4Dr
            source_type: api_record
            title: 维基数据：王象蒙（Q45647401）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45647401
            external_identifier: Q45647401
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:02.160Z
            metadata_json: null
      object_person:
        id: p_UCuWmdu88wkXMEGK9geKmL
        status: active
        display_name: 王象蒙
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王之辅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王之辅，明人物。CBDB 记录其籍贯记录为蒙陰，入仕记录为學校: 生員(庠生)。中国历代人物传记资料库（CBDB）以人物编号 227717 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王之辅 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2XaF6KrMwGSDeaU76DAGrz | 王重光 | accepted |
| children | p_8ZxmoUk6pXaC7TDzaGpcdx | 王象斗 | accepted |
| children | p_6VHJbLTrkCw69Y2Ho1sBH7 | 王象节 | accepted |
| children | p_UCuWmdu88wkXMEGK9geKmL | 王象蒙 | accepted |

## 外部来源

- [维基数据：王象斗（Q16075433）](https://www.wikidata.org/wiki/Q16075433)
- [维基数据：王象节（Q16075437）](https://www.wikidata.org/wiki/Q16075437)
- [维基数据：王象蒙（Q45647401）](https://www.wikidata.org/wiki/Q45647401)
- [维基数据：王之辅（Q16075319）](https://www.wikidata.org/wiki/Q16075319)
- [维基数据：王重光（Q15935070）](https://www.wikidata.org/wiki/Q15935070)
- [CBDB 中国历代人物传记资料库：王之輔（227717）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227717&o=json)
