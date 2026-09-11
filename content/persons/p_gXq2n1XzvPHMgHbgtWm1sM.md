---
schema: wang-person/v1
id: p_gXq2n1XzvPHMgHbgtWm1sM
status: active
merged_into: null
display_name: 王鑒
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G28zjc5G8D2u1VJyv4HXCH
        subject_person_id: p_gXq2n1XzvPHMgHbgtWm1sM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aTrcd3cspcGBoKmGJgAoZf
          claim_id: c_G28zjc5G8D2u1VJyv4HXCH
          source_id: s_WuZzWzsHzeSPXeAizKjJH5
          stance: supports
          locator: CBDB:147525
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（147525）
          source: &a1
            id: s_WuZzWzsHzeSPXeAizKjJH5
            source_type: api_record
            title: 中国历代人物传记资料库：王鑒（CBDB 147525）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147525&o=json
            external_identifier: CBDB:147525
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.739Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QyWm3TCW49WEEPZMxdT7Jk
        subject_person_id: p_gXq2n1XzvPHMgHbgtWm1sM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑒，唐人物。籍贯芒山，曾任鎮將。（中国历代人物传记资料库 CBDB 147525）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SsESme7IU2_ru2YSYpaUem
          claim_id: c_QyWm3TCW49WEEPZMxdT7Jk
          source_id: s_WuZzWzsHzeSPXeAizKjJH5
          stance: supports
          locator: CBDB:147525
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_kJsdxuEzsOwZnRnxBuCIva
        subject_person_id: p_gXq2n1XzvPHMgHbgtWm1sM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WQufWYoRgwAqpQtY7Pr5Nm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pPew5yLSxqIzGaxlUu4_qi
          claim_id: c_kJsdxuEzsOwZnRnxBuCIva
          source_id: s_TSCGRHBtV8ZSHeLUWBiYY8
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianqing 102：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_TSCGRHBtV8ZSHeLUWBiYY8
            source_type: api_record
            title: 中国历代人物传记资料库：王摩（CBDB 139168）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139168&o=json
            external_identifier: CBDB:139168
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_WQufWYoRgwAqpQtY7Pr5Nm
        status: active
        display_name: 王摩
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鑒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑒 | accepted |
| bio.summary | 王鑒，唐人物。籍贯芒山，曾任鎮將。（中国历代人物传记资料库 CBDB 147525） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_WQufWYoRgwAqpQtY7Pr5Nm | 王摩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑒（CBDB 147525）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147525&o=json)
- [中国历代人物传记资料库：王摩（CBDB 139168）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139168&o=json)
