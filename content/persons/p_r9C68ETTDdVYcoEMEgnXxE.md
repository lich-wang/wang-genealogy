---
schema: wang-person/v1
id: p_r9C68ETTDdVYcoEMEgnXxE
status: active
merged_into: null
display_name: 李治
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zAOCmskoP9vzzHi9aUjy9x
        subject_person_id: p_r9C68ETTDdVYcoEMEgnXxE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李治，史料所见人物。本项目依据《王皇后 (唐高宗)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_Fbz5kshKnOOVcJG8dgPUR5
          claim_id: c_zAOCmskoP9vzzHi9aUjy9x
          source_id: s_68ddTvZBwu9RQ7R8wornS3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_68ddTvZBwu9RQ7R8wornS3
            source_type: website
            title: 中文维基百科：王皇后 (唐高宗)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9A%87%E5%90%8E_(%E5%94%90%E9%AB%98%E5%AE%97)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:30.038Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_m3sdZmafGvqvq5Ys5ffzbU
        subject_person_id: p_r9C68ETTDdVYcoEMEgnXxE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李治
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QXofSbDgrizdU7DbyZ7FVN
          claim_id: c_m3sdZmafGvqvq5Ys5ffzbU
          source_id: s_68ddTvZBwu9RQ7R8wornS3
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_cjexN1h3YjUVyEE479pQcd
        subject_person_id: p_GcNA3tAmUdhWNfqQjUwGnM
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_r9C68ETTDdVYcoEMEgnXxE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yQCvCDxLENptD77hNBc7Q6
          claim_id: c_cjexN1h3YjUVyEE479pQcd
          source_id: s_68ddTvZBwu9RQ7R8wornS3
          stance: supports
          locator: 条文：信息框 夫
          quotation: 高宗天皇大帝李治
          interpretation_note: null
          source:
            id: s_68ddTvZBwu9RQ7R8wornS3
            source_type: website
            title: 中文维基百科：王皇后 (唐高宗)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9A%87%E5%90%8E_(%E5%94%90%E9%AB%98%E5%AE%97)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:30.038Z
            metadata_json: null
        - id: cs_xd8j6eMrtTH5QHx6tq2nws
          claim_id: c_cjexN1h3YjUVyEE479pQcd
          source_id: s_jhS8dHR7uKCPvP7Ae441WM
          stance: supports
          locator: 条文：信息框 夫
          quotation: 高宗天皇大帝李治
          interpretation_note: null
          source:
            id: s_jhS8dHR7uKCPvP7Ae441WM
            source_type: website
            title: 中文维基百科：王皇后 (唐高宗)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9A%87%E5%90%8E_(%E5%94%90%E9%AB%98%E5%AE%97)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:43.126Z
            metadata_json: null
      object_person:
        id: p_GcNA3tAmUdhWNfqQjUwGnM
        status: active
        display_name: 王皇后
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李治

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 李治，史料所见人物。本项目依据《王皇后 (唐高宗)》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 李治 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_GcNA3tAmUdhWNfqQjUwGnM | 王皇后 | accepted |

## 外部来源

- [中文维基百科：王皇后 (唐高宗)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9A%87%E5%90%8E_(%E5%94%90%E9%AB%98%E5%AE%97))
