---
schema: wang-person/v1
id: p_nvbD2KSdDNnCzJfwMS6jH4
status: active
merged_into: null
display_name: 王伏生
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q676ZpojKtSVco3zgfz1Sz
        subject_person_id: p_nvbD2KSdDNnCzJfwMS6jH4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伏生
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JZcbBAz6L8xRYW8Mv8thh9
          claim_id: c_Q676ZpojKtSVco3zgfz1Sz
          source_id: s_FH6mx7LD53pxxN494PfZPG
          stance: supports
          locator: CBDB:140031
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140031）
          source: &a1
            id: s_FH6mx7LD53pxxN494PfZPG
            source_type: api_record
            title: 中国历代人物传记资料库：王伏生（CBDB 140031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140031&o=json
            external_identifier: CBDB:140031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.199Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_HLdxYB5zPogJJT2ijujmJX
        subject_person_id: p_nvbD2KSdDNnCzJfwMS6jH4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 695年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EW8PSD7zoAt3yU5etZDR5K
          claim_id: c_HLdxYB5zPogJJT2ijujmJX
          source_id: s_FH6mx7LD53pxxN494PfZPG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZGE2KNxJL8pc8uWkv6GH2B
        subject_person_id: p_nvbD2KSdDNnCzJfwMS6jH4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伏生（卒于695年），唐人物。籍贯長安。（中国历代人物传记资料库 CBDB 140031）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HgXTibzvPRDplNtBcq1M8F
          claim_id: c_ZGE2KNxJL8pc8uWkv6GH2B
          source_id: s_FH6mx7LD53pxxN494PfZPG
          stance: supports
          locator: CBDB:140031
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_B-H7AHcJLHAfqT4e1EJOPB
        subject_person_id: p_nvbD2KSdDNnCzJfwMS6jH4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ghhELGZeEaRHGGiRxTt4bv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1PkerpBt1MDAAvL8X70oUe
          claim_id: c_B-H7AHcJLHAfqT4e1EJOPB
          source_id: s_PKYps8PZJby2FDp4GP8iqQ
          stance: supports
          locator: 唐代墓誌匯編:二卷，Shengong 11：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PKYps8PZJby2FDp4GP8iqQ
            source_type: api_record
            title: 中国历代人物传记资料库：王思本（CBDB 150015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150015&o=json
            external_identifier: CBDB:150015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.807Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ghhELGZeEaRHGGiRxTt4bv
        status: active
        display_name: 王思本
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王伏生

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伏生 | accepted |
| death.date | 695年 | accepted |
| bio.summary | 王伏生（卒于695年），唐人物。籍贯長安。（中国历代人物传记资料库 CBDB 140031） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ghhELGZeEaRHGGiRxTt4bv | 王思本 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伏生（CBDB 140031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140031&o=json)
- [中国历代人物传记资料库：王思本（CBDB 150015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150015&o=json)
