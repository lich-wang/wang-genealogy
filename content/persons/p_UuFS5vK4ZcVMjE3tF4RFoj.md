---
schema: wang-person/v1
id: p_UuFS5vK4ZcVMjE3tF4RFoj
status: active
merged_into: null
display_name: 王仁偘
cbdb_id: 22129
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FfXhK7vnNs7ABwNnDB2nE9
        subject_person_id: p_UuFS5vK4ZcVMjE3tF4RFoj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁偘，閩國人物。中国历代人物传记资料库（CBDB）以人物编号 22129 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_POz3jo3iK1WQXoydIcGwas
          claim_id: c_FfXhK7vnNs7ABwNnDB2nE9
          source_id: s_iXc3ErXHV86pde1y6TmLJN
          stance: supports
          locator: CBDB:22129
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_iXc3ErXHV86pde1y6TmLJN
            source_type: api_record
            title: 中国历代人物传记资料库：王仁偘（CBDB 22129）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22129&o=json
            external_identifier: CBDB:22129
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PiDmt3jSJjE5NrTP5h5NsB
        subject_person_id: p_UuFS5vK4ZcVMjE3tF4RFoj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁偘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_uPRcetcdxMCpJ7NZjHK1f1
          claim_id: c_PiDmt3jSJjE5NrTP5h5NsB
          source_id: s_iXc3ErXHV86pde1y6TmLJN
          stance: supports
          locator: CBDB:22129
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 閩國
          source:
            id: s_iXc3ErXHV86pde1y6TmLJN
            source_type: api_record
            title: 中国历代人物传记资料库：王仁偘（CBDB 22129）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22129&o=json
            external_identifier: CBDB:22129
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Nshe0-b8fG3D0wRQ4jAfAu
        subject_person_id: p_TSnLmw5deMhF6ddrkHCq1X
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UuFS5vK4ZcVMjE3tF4RFoj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2ysXChmBXm7y0q7DsD6NA5
          claim_id: c_Nshe0-b8fG3D0wRQ4jAfAu
          source_id: s_2hRUfr5t1B67KY2QGWLDhm
          stance: supports
          locator: CBDB 双向互证（子 王仁偘 ⇄ 父 王彥英）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_2hRUfr5t1B67KY2QGWLDhm
            source_type: api_record
            title: 中国历代人物传记资料库：王彥英（CBDB 22128）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22128&o=json
            external_identifier: CBDB:22128
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.829Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_TSnLmw5deMhF6ddrkHCq1X
        status: active
        display_name: 王彥英
        merged_into_person_id: null
  children:
    - claim:
        id: c_lsiYg0VEhxdhbiL7oeM6Fo
        subject_person_id: p_UuFS5vK4ZcVMjE3tF4RFoj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_89pxyYXCwEKYhMLt29PYoD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a4pGu4xoyci31SA4UzDldt
          claim_id: c_lsiYg0VEhxdhbiL7oeM6Fo
          source_id: s_7RjS56q2inTQgTRu2wGC13
          stance: supports
          locator: CBDB 双向互证（父 王仁偘 ⇄ 子 王彬）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_7RjS56q2inTQgTRu2wGC13
            source_type: api_record
            title: 中国历代人物传记资料库：王彬（CBDB 1859）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1859&o=json
            external_identifier: CBDB:1859
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.350Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_89pxyYXCwEKYhMLt29PYoD
        status: active
        display_name: 王彬
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仁偘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仁偘，閩國人物。中国历代人物传记资料库（CBDB）以人物编号 22129 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王仁偘 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_TSnLmw5deMhF6ddrkHCq1X | 王彥英 | accepted |
| children | p_89pxyYXCwEKYhMLt29PYoD | 王彬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彬（CBDB 1859）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1859&o=json)
- [中国历代人物传记资料库：王仁偘（CBDB 22129）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22129&o=json)
- [中国历代人物传记资料库：王彥英（CBDB 22128）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22128&o=json)
