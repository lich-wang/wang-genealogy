---
schema: wang-person/v1
id: p_H3GkFF9JrtpeeG6Hzq2h7M
status: active
merged_into: null
display_name: 王保謙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PpXK6mg9Bx8oFdvTr7kBaL
        subject_person_id: p_H3GkFF9JrtpeeG6Hzq2h7M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王保謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Dp2onanALhj7agKpX48wzp
          claim_id: c_PpXK6mg9Bx8oFdvTr7kBaL
          source_id: s_f4mvnLt27ZsMSEKa4GZy74
          stance: supports
          locator: CBDB:142396
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142396）
          source: &a1
            id: s_f4mvnLt27ZsMSEKa4GZy74
            source_type: api_record
            title: 中国历代人物传记资料库：王保謙（CBDB 142396）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142396&o=json
            external_identifier: CBDB:142396
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.214Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_rPp1JbNKBpmb2uWVpx5PhW
        subject_person_id: p_H3GkFF9JrtpeeG6Hzq2h7M
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 566年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4Jz1nv2jVrK6ozQ1t9XmCJ
          claim_id: c_rPp1JbNKBpmb2uWVpx5PhW
          source_id: s_f4mvnLt27ZsMSEKa4GZy74
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_E3ZGBYbsddhdSz2zipUJYj
        subject_person_id: p_H3GkFF9JrtpeeG6Hzq2h7M
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 628年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w5kJpciSnHSLjzC6G8P26J
          claim_id: c_E3ZGBYbsddhdSz2zipUJYj
          source_id: s_f4mvnLt27ZsMSEKa4GZy74
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
        id: c_8VcKLJWUeqMXrEpac6ZZbp
        subject_person_id: p_H3GkFF9JrtpeeG6Hzq2h7M
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王保謙（566年—628年），史料所见人物。本项目依据《中国历代人物传记资料库：王保謙（CBDB 142396）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DFk537rCd_KWj52QpmVL45
          claim_id: c_8VcKLJWUeqMXrEpac6ZZbp
          source_id: s_f4mvnLt27ZsMSEKa4GZy74
          stance: supports
          locator: CBDB:142396
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王保謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王保謙 | accepted |
| birth.date | 566年 | accepted |
| death.date | 628年 | accepted |
| bio.summary | 王保謙（566年—628年），史料所见人物。本项目依据《中国历代人物传记资料库：王保謙（CBDB 142396）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王保謙（CBDB 142396）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142396&o=json)
