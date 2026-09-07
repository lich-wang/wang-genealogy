---
schema: wang-person/v1
id: p_R87VPiL1Y3e82Hg2uz9Nia
status: active
merged_into: null
display_name: 王謙
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fQZJRpr2JHE2MTVQQ-GGV9
        subject_person_id: p_R87VPiL1Y3e82Hg2uz9Nia
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謙，史料所见人物。本项目依据《中國哲學書電子化計劃：《三國志》王粲傳》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-SmxR9NwmubwRkUMSZD8J_
          claim_id: c_fQZJRpr2JHE2MTVQQ-GGV9
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
        id: c_sHVXbq1tsRLQnoSZQ52rdp
        subject_person_id: p_R87VPiL1Y3e82Hg2uz9Nia
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_apBhBKJRK3GPtadyVJBBvs
          claim_id: c_sHVXbq1tsRLQnoSZQ52rdp
          source_id: s_VG7kNwYoYuBWsrjR4QmdYa
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BcLYk5SNDDBzhqPjQcyQ1J
        subject_person_id: p_NUGLHBgkfCJtAARu72KB4B
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_R87VPiL1Y3e82Hg2uz9Nia
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Si6TKUUr6hNRhwHgeK4B13
          claim_id: c_BcLYk5SNDDBzhqPjQcyQ1J
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
  children:
    - claim:
        id: c_7tqx4XADX733C832VSEQNn
        subject_person_id: p_R87VPiL1Y3e82Hg2uz9Nia
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_k6Ypu4sxzDUkjEW1dUEt8o
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DMUj22rFdojyBFgbHzUiio
          claim_id: c_7tqx4XADX733C832VSEQNn
          source_id: s_VG7kNwYoYuBWsrjR4QmdYa
          stance: supports
          locator: 《三国志》卷二十一·王粲传
          quotation: 父谦，大将军何进长史。
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
        id: p_k6Ypu4sxzDUkjEW1dUEt8o
        status: active
        display_name: 王粲
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王謙，史料所见人物。本项目依据《中國哲學書電子化計劃：《三國志》王粲傳》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王謙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NUGLHBgkfCJtAARu72KB4B | 王暢 | accepted |
| children | p_k6Ypu4sxzDUkjEW1dUEt8o | 王粲 | accepted |

## 外部来源

- [中國哲學書電子化計劃：《三國志》王粲傳](https://ctext.org/text.pl?if=gb&node=602902&remap=gb)
