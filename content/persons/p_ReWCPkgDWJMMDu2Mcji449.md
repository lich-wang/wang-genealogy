---
schema: wang-person/v1
id: p_ReWCPkgDWJMMDu2Mcji449
status: active
merged_into: null
display_name: 王韶之
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GqUMS3Mgj8jvXdzEWVb4Yd
        subject_person_id: p_ReWCPkgDWJMMDu2Mcji449
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王韶之（380年—435年），中国古代历史人物。维基数据以独立条目 Q5212674 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_sLh4i31RAFaSPqb3L7-gqn
          claim_id: c_GqUMS3Mgj8jvXdzEWVb4Yd
          source_id: s_bjna9qv4WdKySeV4RHFk3H
          stance: supports
          locator: Q5212674
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_bjna9qv4WdKySeV4RHFk3H
            source_type: api_record
            title: 维基数据：王韶之（Q5212674）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q5212674
            external_identifier: Q5212674
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:03.216Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9F%B6%E4%B9%8B
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_L74McP9gc5jMuHAiUhpvKz
        subject_person_id: p_ReWCPkgDWJMMDu2Mcji449
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 380年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 0380-01-01
            latest: 0380-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VnMhF5yuA43E98ySsyN8uY
          claim_id: c_L74McP9gc5jMuHAiUhpvKz
          source_id: s_bjna9qv4WdKySeV4RHFk3H
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_bjna9qv4WdKySeV4RHFk3H
            source_type: api_record
            title: 维基数据：王韶之（Q5212674）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q5212674
            external_identifier: Q5212674
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:03.216Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9F%B6%E4%B9%8B
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_HYnHx1tqJie5xc7BDox1gp
        subject_person_id: p_ReWCPkgDWJMMDu2Mcji449
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 435年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0435-01-01
            latest: 0435-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RCDfEV4z39RT55Hj1uFTZ2
          claim_id: c_HYnHx1tqJie5xc7BDox1gp
          source_id: s_bjna9qv4WdKySeV4RHFk3H
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_bjna9qv4WdKySeV4RHFk3H
            source_type: api_record
            title: 维基数据：王韶之（Q5212674）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q5212674
            external_identifier: Q5212674
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:03.216Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9F%B6%E4%B9%8B
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_zDj3nhnoLM3hMsG9XZuHCZ
        subject_person_id: p_ReWCPkgDWJMMDu2Mcji449
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王韶之
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_S4rpUJtcL2VgcEjGK6BvJx
          claim_id: c_zDj3nhnoLM3hMsG9XZuHCZ
          source_id: s_bjna9qv4WdKySeV4RHFk3H
          stance: supports
          locator: Q5212674
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UGLcDtGtwADNZ577JnhKRM
        subject_person_id: p_jmPkyeZkLCgqyQZAUfD7mt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ReWCPkgDWJMMDu2Mcji449
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_2KL3mvDU2iH59wcTzFeVVt
          claim_id: c_UGLcDtGtwADNZ577JnhKRM
          source_id: s_VKa4tB4SnbfLR1kZ6e9NC6
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_VKa4tB4SnbfLR1kZ6e9NC6
            source_type: api_record
            title: 维基数据：王伟之（Q22814802）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814802
            external_identifier: Q22814802
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:41.839Z
            metadata_json: null
        - id: cs_LSDt4aqug5t8CV5CqP7rqh
          claim_id: c_UGLcDtGtwADNZ577JnhKRM
          source_id: s_bjna9qv4WdKySeV4RHFk3H
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_bjna9qv4WdKySeV4RHFk3H
            source_type: api_record
            title: 维基数据：王韶之（Q5212674）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q5212674
            external_identifier: Q5212674
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:03.216Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9F%B6%E4%B9%8B
      object_person:
        id: p_jmPkyeZkLCgqyQZAUfD7mt
        status: active
        display_name: 王伟之
        merged_into_person_id: null
  children:
    - claim:
        id: c_jMR2RNim46CpCpYws1pk8A
        subject_person_id: p_ReWCPkgDWJMMDu2Mcji449
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_awYXwC59GjcftyuxjKjY4K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_s72rMZ7gewLghJAUn3WrEJ
          claim_id: c_jMR2RNim46CpCpYws1pk8A
          source_id: s_bjna9qv4WdKySeV4RHFk3H
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_bjna9qv4WdKySeV4RHFk3H
            source_type: api_record
            title: 维基数据：王韶之（Q5212674）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q5212674
            external_identifier: Q5212674
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:03.216Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9F%B6%E4%B9%8B
        - id: cs_H9L3XMk6BnpE27q6FeNii4
          claim_id: c_jMR2RNim46CpCpYws1pk8A
          source_id: s_FAWJduv2uNXQWDdNSECYZ6
          stance: supports
          locator: P22（父）
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
      object_person:
        id: p_awYXwC59GjcftyuxjKjY4K
        status: active
        display_name: 王晔之
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
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
        id: p_GdYWjUMY3nn1SP6F46C7D8
        status: active
        display_name: 王宝明
        merged_into_person_id: null
    - claim:
        id: c_gSS74ifYRHp3f2jfQGML1P
        subject_person_id: p_ReWCPkgDWJMMDu2Mcji449
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_yAzUQjj7EJ7T5tow68WGne
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fSKgfzk8T9tjA8i4UjzuyF
          claim_id: c_gSS74ifYRHp3f2jfQGML1P
          source_id: s_cs7Wn1WUvFa2ksCaaJ6Xj4
          stance: supports
          locator: 条文：条文识读（祖）（2世）
          quotation: 王韶之之孙
          interpretation_note: null
          source:
            id: s_cs7Wn1WUvFa2ksCaaJ6Xj4
            source_type: website
            title: 中文维基百科：王昺之
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%98%BA%E4%B9%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:22.973Z
            metadata_json: null
        - id: cs_3V9BCiiGQJx2nhEsP63edh
          claim_id: c_gSS74ifYRHp3f2jfQGML1P
          source_id: s_w5kxfMu4o4HCAA2Xia1MpT
          stance: supports
          locator: 条文：条文识读（祖）（2世）
          quotation: 王韶之之孙，王晔之之子，王晃和文安皇后王宝明的兄弟。
          interpretation_note: null
          source:
            id: s_w5kxfMu4o4HCAA2Xia1MpT
            source_type: website
            title: 中文维基百科：王昺之
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%98%BA%E4%B9%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:31.889Z
            metadata_json: null
      object_person:
        id: p_yAzUQjj7EJ7T5tow68WGne
        status: active
        display_name: 王昺之
        merged_into_person_id: null
  other: []
---

# 王韶之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王韶之（380年—435年），中国古代历史人物。维基数据以独立条目 Q5212674 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| birth.date | 380年 | accepted |
| death.date | 435年 | accepted |
| name.primary | 王韶之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jmPkyeZkLCgqyQZAUfD7mt | 王伟之 | accepted |
| children | p_awYXwC59GjcftyuxjKjY4K | 王晔之 | accepted |
| descendants | p_GdYWjUMY3nn1SP6F46C7D8 | 王宝明 | accepted |
| descendants | p_yAzUQjj7EJ7T5tow68WGne | 王昺之 | accepted |

## 外部来源

- [维基数据：王韶之（Q5212674）](https://www.wikidata.org/wiki/Q5212674)
- [维基数据：王伟之（Q22814802）](https://www.wikidata.org/wiki/Q22814802)
- [维基数据：王晔之（Q22814803）](https://www.wikidata.org/wiki/Q22814803)
- [中文维基百科：王寶明](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%B6%E6%98%8E)
- [中文维基百科：王昺之](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%98%BA%E4%B9%8B)
