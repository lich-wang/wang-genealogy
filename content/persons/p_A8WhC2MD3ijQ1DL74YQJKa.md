---
schema: wang-person/v1
id: p_A8WhC2MD3ijQ1DL74YQJKa
status: active
merged_into: null
display_name: 刘楚佩
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pGUEJt1p6LFmjNDEfZnWSD
        subject_person_id: p_A8WhC2MD3ijQ1DL74YQJKa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 刘楚佩（？—？），是南朝宋孝武帝刘骏的三女儿，王宪嫄的二女儿。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_tIW7-MTBs6a0XDAXAtvV1E
          claim_id: c_pGUEJt1p6LFmjNDEfZnWSD
          source_id: s_v8hDgs8uZXVbznxb6sCJsZ
          stance: supports
          locator: 导言
          quotation: 刘楚佩（？—？），是南朝宋孝武帝刘骏的三女儿，王宪嫄的二女儿。
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_v8hDgs8uZXVbznxb6sCJsZ
            source_type: website
            title: 中文维基百科：刘楚佩
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%88%98%E6%A5%9A%E4%BD%A9
            external_identifier: Q16603329
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-11T10:29:31.867Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_YNgTyopbnsFvhrjgHGgfxv
        subject_person_id: p_A8WhC2MD3ijQ1DL74YQJKa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 刘楚佩
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1HWHgMqH8JxNJEHxw3BaPR
          claim_id: c_YNgTyopbnsFvhrjgHGgfxv
          source_id: s_7SALGNckMJzeRPrJQ58BZ9
          stance: supports
          locator: Q16603329
          quotation: null
          interpretation_note: null
          source:
            id: s_7SALGNckMJzeRPrJQ58BZ9
            source_type: api_record
            title: 维基数据：刘楚佩（Q16603329）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16603329
            external_identifier: Q16603329
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:20.482Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%88%98%E6%A5%9A%E4%BD%A9
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_8UDxQZjAydPijmiMVFADpn
        subject_person_id: p_A8WhC2MD3ijQ1DL74YQJKa
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_EPN3YNRH5v3a9kop1zob77
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_4MWzwfgTcCaoxiqouKSvC6
          claim_id: c_8UDxQZjAydPijmiMVFADpn
          source_id: s_joJxBUhDogYHUGHf61ssdD
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_joJxBUhDogYHUGHf61ssdD
            source_type: api_record
            title: 维基数据：王瑩（Q11573176）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573176
            external_identifier: Q11573176
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:17.590Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%8E%B9_(%E5%8D%97%E6%9C%9D)
        - id: cs_6FbYeK2cVAq1tZaPEB5v9u
          claim_id: c_8UDxQZjAydPijmiMVFADpn
          source_id: s_7SALGNckMJzeRPrJQ58BZ9
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_7SALGNckMJzeRPrJQ58BZ9
            source_type: api_record
            title: 维基数据：刘楚佩（Q16603329）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16603329
            external_identifier: Q16603329
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:20.482Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%88%98%E6%A5%9A%E4%BD%A9
        - id: cs_6Zw5DB9Jn5Zmmr5zvmDma2
          claim_id: c_8UDxQZjAydPijmiMVFADpn
          source_id: s_mjhk1DhQQFXMrWb8FcbzUX
          stance: supports
          locator: 条文：条文识读（夫）
          quotation: 她后来嫁给了义兴太守王莹
          interpretation_note: null
          source:
            id: s_mjhk1DhQQFXMrWb8FcbzUX
            source_type: website
            title: 中文维基百科：刘楚佩
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%88%98%E6%A5%9A%E4%BD%A9
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:27:26.027Z
            metadata_json: null
        - id: cs_1sL1huJnXURnopBnho4Vmb
          claim_id: c_8UDxQZjAydPijmiMVFADpn
          source_id: s_3yiHyGXC4F98p3f25DhCuv
          stance: supports
          locator: 条文：条文识读（夫）
          quotation: 她后来嫁给了义兴太守王莹。
          interpretation_note: null
          source:
            id: s_3yiHyGXC4F98p3f25DhCuv
            source_type: website
            title: 中文维基百科：刘楚佩
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%88%98%E6%A5%9A%E4%BD%A9
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:56:45.852Z
            metadata_json: null
      object_person:
        id: p_EPN3YNRH5v3a9kop1zob77
        status: active
        display_name: 王瑩
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 刘楚佩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 刘楚佩（？—？），是南朝宋孝武帝刘骏的三女儿，王宪嫄的二女儿。 | accepted |
| name.primary | 刘楚佩 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_EPN3YNRH5v3a9kop1zob77 | 王瑩 | accepted |

## 外部来源

- [维基数据：刘楚佩（Q16603329）](https://www.wikidata.org/wiki/Q16603329)
- [维基数据：王瑩（Q11573176）](https://www.wikidata.org/wiki/Q11573176)
- [中文维基百科：刘楚佩](https://zh.wikipedia.org/wiki/%E5%88%98%E6%A5%9A%E4%BD%A9)
