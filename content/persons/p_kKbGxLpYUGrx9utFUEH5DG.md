---
schema: wang-person/v1
id: p_kKbGxLpYUGrx9utFUEH5DG
status: active
merged_into: null
display_name: 王延喜
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UY_2fCsY__z6yRxlZsut5X
        subject_person_id: p_kKbGxLpYUGrx9utFUEH5DG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延喜（？—944年），五代十国時期光州固始（今河南固始）人，閩國太祖王審知之子。 永隆年间官至汀州刺史。他的兄弟富沙王王延政自称殷国皇帝，反对景宗王延羲。景宗怀疑他和富沙王王延政同谋，派将领许仁钦把他抓回福州，944年，王延喜被朱文进杀害。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_q_WKMAV2hSdv1lMHeN4n31
          claim_id: c_UY_2fCsY__z6yRxlZsut5X
          source_id: s_K2m0Wa1zyutS_QNINsXVsD
          stance: supports
          locator: 导言
          quotation: 王延喜（？—944年），五代十国時期光州固始（今河南固始）人，閩
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source: &a1
            id: s_K2m0Wa1zyutS_QNINsXVsD
            source_type: website
            title: 中文维基百科：王延喜
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%B6%E5%96%9C
            external_identifier: Q16077240
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tH2frDYeSXNiSfWqMKKson
        subject_person_id: p_kKbGxLpYUGrx9utFUEH5DG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延喜
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PJfGgxKeKCjeAfpE9c5Vr8
          claim_id: c_tH2frDYeSXNiSfWqMKKson
          source_id: s_G6PY25QErXoL2nBiLDDT6p
          stance: supports
          locator: Q16077240
          quotation: null
          interpretation_note: null
          source:
            id: s_G6PY25QErXoL2nBiLDDT6p
            source_type: api_record
            title: 维基数据：王延喜（Q16077240）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077240
            external_identifier: Q16077240
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:05.576Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%B6%E5%96%9C
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VEv4NF18CztgbV8EbR8Dwy
        subject_person_id: p_8YMP7N65fqbbLv9pMGphFA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kKbGxLpYUGrx9utFUEH5DG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KW5JhGYBwWXEPyLMgVwH4d
          claim_id: c_VEv4NF18CztgbV8EbR8Dwy
          source_id: s_K2m0Wa1zyutS_QNINsXVsD
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_RdJK1GMgGHAY1CzLyP85d3
          claim_id: c_VEv4NF18CztgbV8EbR8Dwy
          source_id: s_BYvayLpGj9Y1h85cB71ggG
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_BYvayLpGj9Y1h85cB71ggG
            source_type: api_record
            title: 维基数据：王审知（Q708354）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q708354
            external_identifier: Q708354
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:53.403Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%A9%E7%9F%A5
      object_person:
        id: p_8YMP7N65fqbbLv9pMGphFA
        status: active
        display_name: 王审知
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王延喜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王延喜（？—944年），五代十国時期光州固始（今河南固始）人，閩國太祖王審知之子。 永隆年间官至汀州刺史。他的兄弟富沙王王延政自称殷国皇帝，反对景宗王延羲。景宗怀疑他和富沙王王延政同谋，派将领许仁钦把他抓回福州，944年，王延喜被朱文进杀害。 | accepted |
| name.primary | 王延喜 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8YMP7N65fqbbLv9pMGphFA | 王审知 | accepted |

## 外部来源

- [维基数据：王审知（Q708354）](https://www.wikidata.org/wiki/Q708354)
- [维基数据：王延喜（Q16077240）](https://www.wikidata.org/wiki/Q16077240)
- [中文维基百科：王延喜](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BB%B6%E5%96%9C)
