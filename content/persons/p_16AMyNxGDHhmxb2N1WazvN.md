---
schema: wang-person/v1
id: p_16AMyNxGDHhmxb2N1WazvN
status: active
merged_into: null
display_name: 王正廷
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Um4tPRdBD3Nv55xpcrD83V
        subject_person_id: p_16AMyNxGDHhmxb2N1WazvN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正廷（1882年9月7日—1961年5月21日），原名正庭，字儒堂，号子白，男，浙江奉化人。中华民国政治家、外交官、体育活动家，基督教人士，欧美同学会、中华全国体育协进会的创始人之一。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XTXGaTZzUQ1--BpAxc44b_
          claim_id: c_Um4tPRdBD3Nv55xpcrD83V
          source_id: s_k7NRiCr7VYZ5j39yY4Ju63
          stance: supports
          locator: 导言
          quotation: 王正廷（1882年9月7日—1961年5月21日），原名正庭，字
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source: &a1
            id: s_k7NRiCr7VYZ5j39yY4Ju63
            source_type: website
            title: 中文维基百科：王正廷
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%AD%A3%E5%BB%B7
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:17.424Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6ZtpGm3KDFf4KUEurKN77o
        subject_person_id: p_16AMyNxGDHhmxb2N1WazvN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正廷
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XBfCma76R2pRna45BxVJEy
          claim_id: c_6ZtpGm3KDFf4KUEurKN77o
          source_id: s_k7NRiCr7VYZ5j39yY4Ju63
          stance: supports
          locator: Q6127766
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VU1d9wTD3SfjqmPKczupQ9
        subject_person_id: p_zwYmoVozb1FTnG2BUx9Nkq
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_16AMyNxGDHhmxb2N1WazvN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MGQnLFpVPsGP5GFWPDmi5m
          claim_id: c_VU1d9wTD3SfjqmPKczupQ9
          source_id: s_CVVoh176e2dyCJoXhrhZ2c
          stance: supports
          locator: 首段
          quotation: 王正廷是奉化圣公会传道人王际唐的儿子。
          interpretation_note: null
          source:
            id: s_CVVoh176e2dyCJoXhrhZ2c
            source_type: website
            title: 基督教周报：王正廷入读中国第一所官立大学
            creator: null
            publisher: 基督教周报
            published_at_text: null
            canonical_url: https://christianweekly.net/2008/ta17268.html
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T00:05:56.332Z
            metadata_json: null
      object_person:
        id: p_zwYmoVozb1FTnG2BUx9Nkq
        status: active
        display_name: 王际唐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王正廷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王正廷（1882年9月7日—1961年5月21日），原名正庭，字儒堂，号子白，男，浙江奉化人。中华民国政治家、外交官、体育活动家，基督教人士，欧美同学会、中华全国体育协进会的创始人之一。 | accepted |
| name.primary | 王正廷 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zwYmoVozb1FTnG2BUx9Nkq | 王际唐 | accepted |

## 外部来源

- [基督教周报：王正廷入读中国第一所官立大学](https://christianweekly.net/2008/ta17268.html)
- [中文维基百科：王正廷](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%AD%A3%E5%BB%B7)
