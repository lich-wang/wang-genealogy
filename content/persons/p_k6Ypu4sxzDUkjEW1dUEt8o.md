---
schema: wang-person/v1
id: p_k6Ypu4sxzDUkjEW1dUEt8o
status: active
merged_into: null
display_name: 王粲
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5m4cedDY2OaSfGuSNqF8UK
        subject_person_id: p_k6Ypu4sxzDUkjEW1dUEt8o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王粲（卒于217年），史料所见人物。本项目依据《中國哲學書電子化計劃：《三國志》王粲傳》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_TqhO56Hg2AEV120KljMAuL
          claim_id: c_5m4cedDY2OaSfGuSNqF8UK
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
  - predicate: death.date
    recommended:
      claim:
        id: c_67Ypxz6A3iJwLmHeEEh591
        subject_person_id: p_k6Ypu4sxzDUkjEW1dUEt8o
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 217年
            calendar_note: null
            earliest: 0217-01-01
            latest: 0217-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_cbde2nMsdWQF4TdBM4P73L
          claim_id: c_67Ypxz6A3iJwLmHeEEh591
          source_id: s_wEEM8rARsYUa3iJuhhmQQE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_wEEM8rARsYUa3iJuhhmQQE
            source_type: website
            title: 中文維基百科：王粲
            creator: 維基百科貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%B2%B2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-01T02:14:45.516Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_X6Ntrp1gsv73ttkcyahK2T
        subject_person_id: p_k6Ypu4sxzDUkjEW1dUEt8o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王粲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4iHAHARzx3bBrfUn32p22N
          claim_id: c_X6Ntrp1gsv73ttkcyahK2T
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
        id: p_R87VPiL1Y3e82Hg2uz9Nia
        status: active
        display_name: 王謙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children:
    - claim:
        id: c_DLXfnR2pBFPf2BS4Vkp75M
        subject_person_id: p_k6Ypu4sxzDUkjEW1dUEt8o
        claim_kind: relationship
        predicate: kinship.adoptive_parent_of
        object_person_id: p_oNkHTMoDGV5D9gHmvCAx7L
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7PuJV7WjBRF2ZJmzEyLmoj
          claim_id: c_DLXfnR2pBFPf2BS4Vkp75M
          source_id: s_Th4mxe62wMJ85VN4URfY1j
          stance: supports
          locator: 王弼家世辨析
          quotation: 文帝既誅粲二子，以業嗣粲。
          interpretation_note: 王業本为王凱之子，后被立为王粲嗣子，记作收养关系。
          source:
            id: s_Th4mxe62wMJ85VN4URfY1j
            source_type: website
            title: 東海大學圖書館館刊第15期：王弼家世考辨
            creator: null
            publisher: 東海大學圖書館
            published_at_text: null
            canonical_url: https://dcollection.lib.thu.edu.tw/wp-content/uploads/2024/12/%E7%AC%AC15%E6%9C%9F%E9%A4%A8%E5%88%8A1-16.pdf
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T02:14:44.746Z
            metadata_json: null
      object_person:
        id: p_oNkHTMoDGV5D9gHmvCAx7L
        status: active
        display_name: 王業
        merged_into_person_id: null
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王粲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王粲（卒于217年），史料所见人物。本项目依据《中國哲學書電子化計劃：《三國志》王粲傳》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 217年 | accepted |
| name.primary | 王粲 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_R87VPiL1Y3e82Hg2uz9Nia | 王謙 | accepted |
| adoptive_children | p_oNkHTMoDGV5D9gHmvCAx7L | 王業 | accepted |

## 外部来源

- [東海大學圖書館館刊第15期：王弼家世考辨](https://dcollection.lib.thu.edu.tw/wp-content/uploads/2024/12/%E7%AC%AC15%E6%9C%9F%E9%A4%A8%E5%88%8A1-16.pdf)
- [中國哲學書電子化計劃：《三國志》王粲傳](https://ctext.org/text.pl?if=gb&node=602902&remap=gb)
- [中文維基百科：王粲](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%B2%B2)
