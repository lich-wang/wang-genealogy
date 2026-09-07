---
schema: wang-person/v1
id: p_N7W5BS5z7MadPCBLnE3CsD
status: active
merged_into: null
display_name: 王龔
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D_ez9ZV_JuTkN-QHxZEPMm
        subject_person_id: p_N7W5BS5z7MadPCBLnE3CsD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王龔，史料所见人物。本项目依据《中國哲學書電子化計劃：《三國志》王粲傳》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_39xhCOTkvFSAUznlPgvo2Q
          claim_id: c_D_ez9ZV_JuTkN-QHxZEPMm
          source_id: s_VG7kNwYoYuBWsrjR4QmdYa
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_VG7kNwYoYuBWsrjR4QmdYa
            source_type: book
            title: 中國哲學書電子化計劃：《三國志》王粲傳
            creator: null
            publisher: 中國哲學書電子化計劃
            published_at_text: null
            canonical_url: https://ctext.org/text.pl?if=gb&node=602902&remap=gb
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T02:14:44.747Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_H4DsmznVK23wQuLCDHa6LV
        subject_person_id: p_N7W5BS5z7MadPCBLnE3CsD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王龔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_EJW6pRXuq8E9UPGfmuKURJ
          claim_id: c_H4DsmznVK23wQuLCDHa6LV
          source_id: s_VG7kNwYoYuBWsrjR4QmdYa
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_XyVFqGqzMe5KLkFwTvWKwX
        subject_person_id: p_N7W5BS5z7MadPCBLnE3CsD
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_NUGLHBgkfCJtAARu72KB4B
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5Xp9DffePhCfEicBs8RaZX
          claim_id: c_XyVFqGqzMe5KLkFwTvWKwX
          source_id: s_VG7kNwYoYuBWsrjR4QmdYa
          stance: supports
          locator: 《三国志》卷二十一·王粲传
          quotation: 曾祖父龚，祖父畅，皆为汉三公。父谦，大将军何进长史。
          interpretation_note: null
          source:
            id: s_VG7kNwYoYuBWsrjR4QmdYa
            source_type: book
            title: 中國哲學書電子化計劃：《三國志》王粲傳
            creator: null
            publisher: 中國哲學書電子化計劃
            published_at_text: null
            canonical_url: https://ctext.org/text.pl?if=gb&node=602902&remap=gb
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T02:14:44.747Z
            metadata_json: null
      object_person:
        id: p_NUGLHBgkfCJtAARu72KB4B
        status: active
        display_name: 王暢
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王龔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王龔，史料所见人物。本项目依据《中國哲學書電子化計劃：《三國志》王粲傳》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王龔 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_NUGLHBgkfCJtAARu72KB4B | 王暢 | accepted |

## 外部来源

- [中國哲學書電子化計劃：《三國志》王粲傳](https://ctext.org/text.pl?if=gb&node=602902&remap=gb)
