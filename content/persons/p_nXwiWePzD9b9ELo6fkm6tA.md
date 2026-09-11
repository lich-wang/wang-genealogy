---
schema: wang-person/v1
id: p_nXwiWePzD9b9ELo6fkm6tA
status: active
merged_into: null
display_name: 王之淹
cbdb_id: 526798
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1kZLrDL6bhZU2kF315Tc7A
        subject_person_id: p_nXwiWePzD9b9ELo6fkm6tA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之淹，清人物。中国历代人物传记资料库（CBDB）以人物编号 526798 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs__X3UNKqdQGWHw23uw0i564
          claim_id: c_1kZLrDL6bhZU2kF315Tc7A
          source_id: s_A8fBr7T75fZ5QVyA3WNScJ
          stance: supports
          locator: CBDB:526798
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_A8fBr7T75fZ5QVyA3WNScJ
            source_type: api_record
            title: 中国历代人物传记资料库：王之淹（CBDB 526798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526798&o=json
            external_identifier: CBDB:526798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PkBWGkBnK8zgE2Tjn6JMBN
        subject_person_id: p_nXwiWePzD9b9ELo6fkm6tA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之淹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1vyZK5YJNcfKXF3tqzQ8Ur
          claim_id: c_PkBWGkBnK8zgE2Tjn6JMBN
          source_id: s_A8fBr7T75fZ5QVyA3WNScJ
          stance: supports
          locator: CBDB:526798
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7101-7200）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_A8fBr7T75fZ5QVyA3WNScJ
            source_type: api_record
            title: 中国历代人物传记资料库：王之淹（CBDB 526798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526798&o=json
            external_identifier: CBDB:526798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_iGBG7vpaGmSvYql8KHWlLm
        subject_person_id: p_afPNNs5ZnKkGi8uzmbG1Wn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nXwiWePzD9b9ELo6fkm6tA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5W103l9A-LL_NzO3QrxN06
          claim_id: c_iGBG7vpaGmSvYql8KHWlLm
          source_id: s_rTuc5S99rm8FC13m7vE1Te
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12963：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rTuc5S99rm8FC13m7vE1Te
            source_type: api_record
            title: 中国历代人物传记资料库：王昊（CBDB 69262）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69262&o=json
            external_identifier: CBDB:69262
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.184Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_afPNNs5ZnKkGi8uzmbG1Wn
        status: active
        display_name: 王昊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王之淹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王之淹，清人物。中国历代人物传记资料库（CBDB）以人物编号 526798 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王之淹 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_afPNNs5ZnKkGi8uzmbG1Wn | 王昊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昊（CBDB 69262）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69262&o=json)
- [中国历代人物传记资料库：王之淹（CBDB 526798）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526798&o=json)
