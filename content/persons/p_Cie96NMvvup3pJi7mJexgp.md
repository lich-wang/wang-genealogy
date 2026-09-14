---
schema: wang-person/v1
id: p_Cie96NMvvup3pJi7mJexgp
status: active
merged_into: null
display_name: 王臺
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4ezL9cQD46G74gAbXXmgxh
        subject_person_id: p_Cie96NMvvup3pJi7mJexgp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_y4jtaPypVDkG35zLoTZnP5
          claim_id: c_4ezL9cQD46G74gAbXXmgxh
          source_id: s_AuDzPn7QGtbtTAmxsbFnD6
          stance: supports
          locator: CBDB:227301
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（227301）
          source: &a1
            id: s_AuDzPn7QGtbtTAmxsbFnD6
            source_type: api_record
            title: 中国历代人物传记资料库：王臺（CBDB 227301）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227301&o=json
            external_identifier: CBDB:227301
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.496Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i2XC7Mp56mwwJesuRYg4XN
        subject_person_id: p_Cie96NMvvup3pJi7mJexgp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王臺，明人物。萬曆丙戌科進士進士，籍贯臨清，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 227301）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_r7dscN8RnKNP28VYr8BahA
          claim_id: c_i2XC7Mp56mwwJesuRYg4XN
          source_id: s_AuDzPn7QGtbtTAmxsbFnD6
          stance: supports
          locator: CBDB:227301
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_XRH394c5-YeHegPcalgXWD
        subject_person_id: p_FygGhfrnq3smeMksbXnbJf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Cie96NMvvup3pJi7mJexgp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8eXCywFgEpjr218PvzQAGZ
          claim_id: c_XRH394c5-YeHegPcalgXWD
          source_id: s_uFt9GWdZlbC7AXJJgnGNHU
          stance: supports
          locator: CBDB：兄弟 王都（207078）之父／母 王雍熙
          quotation: null
          interpretation_note: 由兄弟关系推断：王臺 与 王都 为同胞（CBDB 记「兄」），王都 之父／母即 王臺 之父／母。
          source:
            id: s_uFt9GWdZlbC7AXJJgnGNHU
            source_type: api_record
            title: 中国历代人物传记资料库：王臺（CBDB 227301）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227301&o=json
            external_identifier: CBDB:227301
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FygGhfrnq3smeMksbXnbJf
        status: active
        display_name: 王雍熙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ZtYZbVJ_Q4YCcyiqYiwPFI
        subject_person_id: p_4UbRK7w6DiK7iFYWsav6v1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Cie96NMvvup3pJi7mJexgp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1rIc3jrK8u1YaRcnvRsLnx
          claim_id: c_ZtYZbVJ_Q4YCcyiqYiwPFI
          source_id: s_uFt9GWdZlbC7AXJJgnGNHU
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207078 王都）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uFt9GWdZlbC7AXJJgnGNHU
            source_type: api_record
            title: 中国历代人物传记资料库：王臺（CBDB 227301）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227301&o=json
            external_identifier: CBDB:227301
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4UbRK7w6DiK7iFYWsav6v1
        status: active
        display_name: 王都
        merged_into_person_id: null
---

# 王臺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王臺 | accepted |
| bio.summary | 王臺，明人物。萬曆丙戌科進士進士，籍贯臨清，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 227301） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FygGhfrnq3smeMksbXnbJf | 王雍熙 | accepted |
| other | p_4UbRK7w6DiK7iFYWsav6v1 | 王都 | accepted |

## 外部来源

- [中国历代人物传记资料库：王臺（CBDB 227301）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227301&o=json)
