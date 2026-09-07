---
schema: wang-person/v1
id: p_GdYWjUMY3nn1SP6F46C7D8
status: active
merged_into: null
display_name: 王宝明
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f9N7iDenqLgHYAsSuh6kj9
        subject_person_id: p_GdYWjUMY3nn1SP6F46C7D8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宝明（455年—512年），史料所见人物。本项目依据《王宝明》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_LC78p5KgeeW_J9I5joTtX6
          claim_id: c_f9N7iDenqLgHYAsSuh6kj9
          source_id: s_iX6EcmDmfv26R2t9U5PtZP
          stance: supports
          locator: Q699633
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_iX6EcmDmfv26R2t9U5PtZP
            source_type: api_record
            title: 维基数据：王宝明（Q699633）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q699633
            external_identifier: Q699633
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:31.982Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%B6%E6%98%8E
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_sUAHgje3iEGyHhTpK5eegc
        subject_person_id: p_GdYWjUMY3nn1SP6F46C7D8
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 455年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 0455-01-01
            latest: 0455-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ewPMBhBWGw2cdFc6gvdneu
          claim_id: c_sUAHgje3iEGyHhTpK5eegc
          source_id: s_iX6EcmDmfv26R2t9U5PtZP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_iX6EcmDmfv26R2t9U5PtZP
            source_type: api_record
            title: 维基数据：王宝明（Q699633）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q699633
            external_identifier: Q699633
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:31.982Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%B6%E6%98%8E
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_i3YnbkzcafzcpaYQh8YiPA
        subject_person_id: p_GdYWjUMY3nn1SP6F46C7D8
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 512年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0512-01-01
            latest: 0512-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9xH3LnMRZ4T2ST99N6Queg
          claim_id: c_i3YnbkzcafzcpaYQh8YiPA
          source_id: s_iX6EcmDmfv26R2t9U5PtZP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_iX6EcmDmfv26R2t9U5PtZP
            source_type: api_record
            title: 维基数据：王宝明（Q699633）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q699633
            external_identifier: Q699633
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:31.982Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%B6%E6%98%8E
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_f1bX973QwxtiMLJmPviUKM
        subject_person_id: p_GdYWjUMY3nn1SP6F46C7D8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宝明
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_iHijnP23kX6BcPa9UKsYY3
          claim_id: c_f1bX973QwxtiMLJmPviUKM
          source_id: s_iX6EcmDmfv26R2t9U5PtZP
          stance: supports
          locator: Q699633
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DE8vPuQPBYgdLkYP38x4Dm
        subject_person_id: p_awYXwC59GjcftyuxjKjY4K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GdYWjUMY3nn1SP6F46C7D8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_dXN5L7KuxAbYtfG1CaAfe1
          claim_id: c_DE8vPuQPBYgdLkYP38x4Dm
          source_id: s_FAWJduv2uNXQWDdNSECYZ6
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_FAWJduv2uNXQWDdNSECYZ6
            source_type: api_record
            title: 维基数据：王晔之（Q22814803）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814803
            external_identifier: Q22814803
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:11.210Z
            metadata_json: null
        - id: cs_bykGs8uAAwAAEuvvtr5XkS
          claim_id: c_DE8vPuQPBYgdLkYP38x4Dm
          source_id: s_iX6EcmDmfv26R2t9U5PtZP
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_iX6EcmDmfv26R2t9U5PtZP
            source_type: api_record
            title: 维基数据：王宝明（Q699633）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q699633
            external_identifier: Q699633
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:31.982Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%B6%E6%98%8E
        - id: cs_oksxwGkB2MZodE8TikbZ5C
          claim_id: c_DE8vPuQPBYgdLkYP38x4Dm
          source_id: s_NADmmhGEycC7YXwvegB4xw
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 父親是太宰祭酒王曄之
          interpretation_note: null
          source:
            id: s_NADmmhGEycC7YXwvegB4xw
            source_type: website
            title: 中文维基百科：王寶明
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%B6%E6%98%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:43.962Z
            metadata_json: null
        - id: cs_sCi9DTTRxdwLboESKfPWoH
          claim_id: c_DE8vPuQPBYgdLkYP38x4Dm
          source_id: s_8dJEFY4vCmVS6D98EX9MCr
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 祖父是吳興太守王韶之，父親是太宰祭酒王曄之
          interpretation_note: null
          source:
            id: s_8dJEFY4vCmVS6D98EX9MCr
            source_type: website
            title: 中文维基百科：王寶明
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%B6%E6%98%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:55:49.755Z
            metadata_json: null
      object_person:
        id: p_awYXwC59GjcftyuxjKjY4K
        status: active
        display_name: 王晔之
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_mtYsyopB5fHAgEByuC8CQC
        subject_person_id: p_5mjHyYsFqboLGdAD72Zsrj
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_GdYWjUMY3nn1SP6F46C7D8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_cKcewCm7qGL55fDRepHm74
          claim_id: c_mtYsyopB5fHAgEByuC8CQC
          source_id: s_iX6EcmDmfv26R2t9U5PtZP
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_iX6EcmDmfv26R2t9U5PtZP
            source_type: api_record
            title: 维基数据：王宝明（Q699633）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q699633
            external_identifier: Q699633
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:31.982Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%B6%E6%98%8E
        - id: cs_ofUZVgTdFJknpKYxv1PdH8
          claim_id: c_mtYsyopB5fHAgEByuC8CQC
          source_id: s_jWyFGUNmn4Nem98vVN3rHx
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_jWyFGUNmn4Nem98vVN3rHx
            source_type: api_record
            title: 维基数据：萧长懋（Q259628）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q259628
            external_identifier: Q259628
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:39:07.275Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E8%95%AD%E9%95%B7%E6%87%8B
        - id: cs_3kYfNmZpyPwJcsxzh8DvgY
          claim_id: c_mtYsyopB5fHAgEByuC8CQC
          source_id: s_L6sL7LpLhKzyphuJDZsNPo
          stance: supports
          locator: 条文：条文识读（妃）
          quotation: 太子妃王宝明
          interpretation_note: null
          source:
            id: s_L6sL7LpLhKzyphuJDZsNPo
            source_type: website
            title: 中文维基百科：蕭長懋
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E8%95%AD%E9%95%B7%E6%87%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:09:25.125Z
            metadata_json: null
        - id: cs_F5LxAiTgHdCx7GaMZch4in
          claim_id: c_mtYsyopB5fHAgEByuC8CQC
          source_id: s_MAwEdYKjB5AmTLVsbq5mej
          stance: supports
          locator: 条文：条文识读（妃）
          quotation: 太子妃王宝明
          interpretation_note: null
          source:
            id: s_MAwEdYKjB5AmTLVsbq5mej
            source_type: website
            title: 中文维基百科：蕭長懋
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E8%95%AD%E9%95%B7%E6%87%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:55.559Z
            metadata_json: null
        - id: cs_3rN1WDRiJ94P9QnZ8jPRxE
          claim_id: c_mtYsyopB5fHAgEByuC8CQC
          source_id: s_pkkBNh94ZC45M4TYAuykiq
          stance: supports
          locator: 条文：条文识读（妃）
          quotation: 太子妃王宝明
          interpretation_note: null
          source:
            id: s_pkkBNh94ZC45M4TYAuykiq
            source_type: website
            title: 中文维基百科：蕭長懋
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E8%95%AD%E9%95%B7%E6%87%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:56.941Z
            metadata_json: null
        - id: cs_F7NQY87bJ5NowDD2d4xVKR
          claim_id: c_mtYsyopB5fHAgEByuC8CQC
          source_id: s_NADmmhGEycC7YXwvegB4xw
          stance: supports
          locator: 条文：条文识读（妻）
          quotation: 南朝齊文惠太子蕭長懋之妻。
          interpretation_note: null
          source:
            id: s_NADmmhGEycC7YXwvegB4xw
            source_type: website
            title: 中文维基百科：王寶明
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%B6%E6%98%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:43.962Z
            metadata_json: null
        - id: cs_3LpNKLPVBuoyVnC72GWMKK
          claim_id: c_mtYsyopB5fHAgEByuC8CQC
          source_id: s_4H6rqNRRDJWCciiFsqA31s
          stance: supports
          locator: 条文：条文识读（妻）
          quotation: 太子妃王宝明，生蕭昭業
          interpretation_note: null
          source:
            id: s_4H6rqNRRDJWCciiFsqA31s
            source_type: website
            title: 中文维基百科：蕭長懋
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E8%95%AD%E9%95%B7%E6%87%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:44.101Z
            metadata_json: null
        - id: cs_An88EbCE8WZ83S8Lvgi2ep
          claim_id: c_mtYsyopB5fHAgEByuC8CQC
          source_id: s_8dJEFY4vCmVS6D98EX9MCr
          stance: supports
          locator: 条文：条文识读（夫）
          quotation: 南朝齊文惠太子蕭長懋之妻。
          interpretation_note: null
          source:
            id: s_8dJEFY4vCmVS6D98EX9MCr
            source_type: website
            title: 中文维基百科：王寶明
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%B6%E6%98%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:55:49.755Z
            metadata_json: null
      object_person:
        id: p_5mjHyYsFqboLGdAD72Zsrj
        status: active
        display_name: 萧长懋
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_yh59DH26eFm6m8XZLdo8Ce
        subject_person_id: p_ReWCPkgDWJMMDu2Mcji449
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GdYWjUMY3nn1SP6F46C7D8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ns6xonHh53dv4DD6RJvAHP
          claim_id: c_yh59DH26eFm6m8XZLdo8Ce
          source_id: s_NADmmhGEycC7YXwvegB4xw
          stance: supports
          locator: 条文：条文识读（祖）（2世）
          quotation: 祖父是吳興太守王韶之
          interpretation_note: null
          source:
            id: s_NADmmhGEycC7YXwvegB4xw
            source_type: website
            title: 中文维基百科：王寶明
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%B6%E6%98%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:43.962Z
            metadata_json: null
        - id: cs_kstdodVo46PUMWvuDL133z
          claim_id: c_yh59DH26eFm6m8XZLdo8Ce
          source_id: s_8dJEFY4vCmVS6D98EX9MCr
          stance: supports
          locator: 条文：条文识读（祖）（2世）
          quotation: 祖父是吳興太守王韶之，父親是太宰祭酒王曄之
          interpretation_note: null
          source:
            id: s_8dJEFY4vCmVS6D98EX9MCr
            source_type: website
            title: 中文维基百科：王寶明
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%B6%E6%98%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:55:49.755Z
            metadata_json: null
      object_person:
        id: p_ReWCPkgDWJMMDu2Mcji449
        status: active
        display_name: 王韶之
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王宝明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宝明（455年—512年），史料所见人物。本项目依据《王宝明》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 455年 | accepted |
| death.date | 512年 | accepted |
| name.primary | 王宝明 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_awYXwC59GjcftyuxjKjY4K | 王晔之 | accepted |
| spouses | p_5mjHyYsFqboLGdAD72Zsrj | 萧长懋 | accepted |
| ancestors | p_ReWCPkgDWJMMDu2Mcji449 | 王韶之 | accepted |

## 外部来源

- [维基数据：王宝明（Q699633）](https://www.wikidata.org/wiki/Q699633)
- [维基数据：王晔之（Q22814803）](https://www.wikidata.org/wiki/Q22814803)
- [维基数据：萧长懋（Q259628）](https://www.wikidata.org/wiki/Q259628)
- [中文维基百科：王寶明](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%B6%E6%98%8E)
- [中文维基百科：蕭長懋](https://zh.wikipedia.org/wiki/%E8%95%AD%E9%95%B7%E6%87%8B)
