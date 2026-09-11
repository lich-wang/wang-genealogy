---
schema: wang-person/v1
id: p_DHYbJsS7LE12BDd6qGrWUt
status: active
merged_into: null
display_name: 王蒔蘭
cbdb_id: 69391
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZyGjZ3KoVMEF6ycG7V4nsU
        subject_person_id: p_DHYbJsS7LE12BDd6qGrWUt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蒔蘭，清人物。中国历代人物传记资料库（CBDB）以人物编号 69391 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_wYtOtpF9Ze0gGC5F_6cMe_
          claim_id: c_ZyGjZ3KoVMEF6ycG7V4nsU
          source_id: s_TLJXB66rEe7k5NxsfE6yfp
          stance: supports
          locator: CBDB:69391
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_TLJXB66rEe7k5NxsfE6yfp
            source_type: api_record
            title: 中国历代人物传记资料库：王蒔蘭（CBDB 69391）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69391&o=json
            external_identifier: CBDB:69391
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.831Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nJshAysGUymZZ7dHxxHY1u
        subject_person_id: p_DHYbJsS7LE12BDd6qGrWUt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蒔蘭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_spRDXPZhyBBjbnbG6PDDX4
          claim_id: c_nJshAysGUymZZ7dHxxHY1u
          source_id: s_TLJXB66rEe7k5NxsfE6yfp
          stance: supports
          locator: CBDB:69391
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1501-1600）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_TLJXB66rEe7k5NxsfE6yfp
            source_type: api_record
            title: 中国历代人物传记资料库：王蒔蘭（CBDB 69391）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69391&o=json
            external_identifier: CBDB:69391
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.831Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_rvJL5TFtN2WKwh4d08cQr0
        subject_person_id: p_DHYbJsS7LE12BDd6qGrWUt
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5nNKgjEiLhifykXD8rQVag
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KEn4kU4fokRlHEDSVnQoNp
          claim_id: c_rvJL5TFtN2WKwh4d08cQr0
          source_id: s_38m6pv8hZfy5B91Ggw3X9h
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13096：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_38m6pv8hZfy5B91Ggw3X9h
            source_type: api_record
            title: 中国历代人物传记资料库：王丙燽（CBDB 526924）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526924&o=json
            external_identifier: CBDB:526924
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.303Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5nNKgjEiLhifykXD8rQVag
        status: active
        display_name: 王丙燽
        merged_into_person_id: null
    - claim:
        id: c_9I_fczEgZZB9Rjz4aPmuGm
        subject_person_id: p_DHYbJsS7LE12BDd6qGrWUt
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_A7GQGqeizjCQayLYiygXyu
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OVFfyiYP4GEI2NVACv-3dc
          claim_id: c_9I_fczEgZZB9Rjz4aPmuGm
          source_id: s_jC2po3niD88mnSLhvM8SqR
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13096：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jC2po3niD88mnSLhvM8SqR
            source_type: api_record
            title: 中国历代人物传记资料库：王世鈞（CBDB 526926）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526926&o=json
            external_identifier: CBDB:526926
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.342Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_A7GQGqeizjCQayLYiygXyu
        status: active
        display_name: 王世鈞
        merged_into_person_id: null
  other: []
---

# 王蒔蘭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王蒔蘭，清人物。中国历代人物传记资料库（CBDB）以人物编号 69391 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王蒔蘭 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_5nNKgjEiLhifykXD8rQVag | 王丙燽 | accepted |
| descendants | p_A7GQGqeizjCQayLYiygXyu | 王世鈞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王丙燽（CBDB 526924）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526924&o=json)
- [中国历代人物传记资料库：王蒔蘭（CBDB 69391）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69391&o=json)
- [中国历代人物传记资料库：王世鈞（CBDB 526926）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526926&o=json)
