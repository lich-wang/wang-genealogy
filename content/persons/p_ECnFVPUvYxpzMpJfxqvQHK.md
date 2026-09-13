---
schema: wang-person/v1
id: p_ECnFVPUvYxpzMpJfxqvQHK
status: active
merged_into: null
display_name: 王伦之
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Qol5tbSNWUDSgYCiEcKGEX
        subject_person_id: p_ECnFVPUvYxpzMpJfxqvQHK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伦之（?—?），《南史》作王纶之，字元章，南朝齐政治人物，琅邪郡臨沂县人。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_KfRxYLlJ4BuPEA73C8Bnj-
          claim_id: c_Qol5tbSNWUDSgYCiEcKGEX
          source_id: s_6_V-E0MrZMr8QWSuxMZXLy
          stance: supports
          locator: 导言
          quotation: 王伦之（?—?），《南史》作王纶之，字元章，南朝齐政治人物，琅邪
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_6_V-E0MrZMr8QWSuxMZXLy
            source_type: website
            title: 中文维基百科：王伦之
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BC%A6%E4%B9%8B
            external_identifier: Q55696292
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-11T10:29:31.867Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7Z1x1toqWgFpSS2J5wiTGo
        subject_person_id: p_ECnFVPUvYxpzMpJfxqvQHK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伦之
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fn638Q7YZ9dqkQzA4HHkzp
          claim_id: c_7Z1x1toqWgFpSS2J5wiTGo
          source_id: s_Z9wYNXjDiLsZXu1v4iubrD
          stance: supports
          locator: Q55696292
          quotation: null
          interpretation_note: null
          source:
            id: s_Z9wYNXjDiLsZXu1v4iubrD
            source_type: api_record
            title: 维基数据：王伦之（Q55696292）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q55696292
            external_identifier: Q55696292
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:39:36.308Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BC%A6%E4%B9%8B
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_AcBLPW2uv2r4xkKdjCpwLJ
        subject_person_id: p_6o39vhzwrUBUBBJTneU17s
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ECnFVPUvYxpzMpJfxqvQHK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_4RyFrLzGc5LYBqCrLXxMf8
          claim_id: c_AcBLPW2uv2r4xkKdjCpwLJ
          source_id: s_SeRBREhkJBhdYzLDceat33
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_SeRBREhkJBhdYzLDceat33
            source_type: api_record
            title: 维基数据：王延之（Q11573058）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573058
            external_identifier: Q11573058
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:30:51.108Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%B6%E4%B9%8B
        - id: cs_yHpoNiu683vh9fW6K51GV3
          claim_id: c_AcBLPW2uv2r4xkKdjCpwLJ
          source_id: s_Z9wYNXjDiLsZXu1v4iubrD
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Z9wYNXjDiLsZXu1v4iubrD
            source_type: api_record
            title: 维基数据：王伦之（Q55696292）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q55696292
            external_identifier: Q55696292
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:39:36.308Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BC%A6%E4%B9%8B
        - id: cs_PHHK182f6bR2kGyKiESYeJ
          claim_id: c_AcBLPW2uv2r4xkKdjCpwLJ
          source_id: s_zPzun7i3uM4DfNQRFYdPkp
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 王延之之子
          interpretation_note: null
          source:
            id: s_zPzun7i3uM4DfNQRFYdPkp
            source_type: website
            title: 中文维基百科：王伦之
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BC%A6%E4%B9%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:47.591Z
            metadata_json: null
      object_person:
        id: p_6o39vhzwrUBUBBJTneU17s
        status: active
        display_name: 王延之
        merged_into_person_id: null
  children:
    - claim:
        id: c_8xbvzeo5Hhpy9reStmMw74
        subject_person_id: p_ECnFVPUvYxpzMpJfxqvQHK
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_YtF2rLeKPWA7sm1Z8P1kQf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_D1sMJAihV1J6ZZFQZADoxq
          claim_id: c_8xbvzeo5Hhpy9reStmMw74
          source_id: s_zPzun7i3uM4DfNQRFYdPkp
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 王纶之的儿子叫王昕
          interpretation_note: null
          source:
            id: s_zPzun7i3uM4DfNQRFYdPkp
            source_type: website
            title: 中文维基百科：王伦之
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BC%A6%E4%B9%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:47.591Z
            metadata_json: null
      object_person:
        id: p_YtF2rLeKPWA7sm1Z8P1kQf
        status: active
        display_name: 王昕
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_fnegg8g16AiDQzHZTF1cKS
        subject_person_id: p_RFAxApRNSJsF8v1A2DNDnv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ECnFVPUvYxpzMpJfxqvQHK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xwzmPZQTQ92a7KnyuM1GGE
          claim_id: c_fnegg8g16AiDQzHZTF1cKS
          source_id: s_zPzun7i3uM4DfNQRFYdPkp
          stance: supports
          locator: 条文：条文识读（祖）（2世）
          quotation: 王昇之的孙子
          interpretation_note: null
          source:
            id: s_zPzun7i3uM4DfNQRFYdPkp
            source_type: website
            title: 中文维基百科：王伦之
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BC%A6%E4%B9%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:47.591Z
            metadata_json: null
      object_person:
        id: p_RFAxApRNSJsF8v1A2DNDnv
        status: active
        display_name: 王升之
        merged_into_person_id: null
    - claim:
        id: c_NrzbYhvQUyU93hRCF33aDz
        subject_person_id: p_PfgXZYxCc5dBQbZvBHkDAc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ECnFVPUvYxpzMpJfxqvQHK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1HG3mwD2xaVuZxEQuZy34i
          claim_id: c_NrzbYhvQUyU93hRCF33aDz
          source_id: s_zPzun7i3uM4DfNQRFYdPkp
          stance: supports
          locator: 条文：条文识读（曾祖）（3世）
          quotation: 王敬弘曾孙
          interpretation_note: null
          source:
            id: s_zPzun7i3uM4DfNQRFYdPkp
            source_type: website
            title: 中文维基百科：王伦之
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BC%A6%E4%B9%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:47.591Z
            metadata_json: null
      object_person:
        id: p_PfgXZYxCc5dBQbZvBHkDAc
        status: active
        display_name: 王敬弘
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王伦之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王伦之（?—?），《南史》作王纶之，字元章，南朝齐政治人物，琅邪郡臨沂县人。 | accepted |
| name.primary | 王伦之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6o39vhzwrUBUBBJTneU17s | 王延之 | accepted |
| children | p_YtF2rLeKPWA7sm1Z8P1kQf | 王昕 | accepted |
| ancestors | p_RFAxApRNSJsF8v1A2DNDnv | 王升之 | accepted |
| ancestors | p_PfgXZYxCc5dBQbZvBHkDAc | 王敬弘 | accepted |

## 外部来源

- [维基数据：王伦之（Q55696292）](https://www.wikidata.org/wiki/Q55696292)
- [维基数据：王延之（Q11573058）](https://www.wikidata.org/wiki/Q11573058)
- [中文维基百科：王伦之](https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BC%A6%E4%B9%8B)
