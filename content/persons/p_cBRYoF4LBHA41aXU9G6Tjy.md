---
schema: wang-person/v1
id: p_cBRYoF4LBHA41aXU9G6Tjy
status: active
merged_into: null
display_name: 王文雅
cbdb_id: 158365
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oMtxBx1b1dFWw7tbU1J4qq
        subject_person_id: p_cBRYoF4LBHA41aXU9G6Tjy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文雅，唐人物。籍贯高平。（中国历代人物传记资料库 CBDB 158365）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_IEcVwp1vdSCBv00LkYVTg2
          claim_id: c_oMtxBx1b1dFWw7tbU1J4qq
          source_id: s_54YGtEdiddBZ15V4F8ErRc
          stance: supports
          locator: CBDB:158365
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_54YGtEdiddBZ15V4F8ErRc
            source_type: api_record
            title: 中国历代人物传记资料库：王文雅（CBDB 158365）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158365&o=json
            external_identifier: CBDB:158365
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_VEv4e5YXYhBDECL2eGYs2a
        subject_person_id: p_cBRYoF4LBHA41aXU9G6Tjy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文雅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4XxG1d81CjX1J75Dvk6BLi
          claim_id: c_VEv4e5YXYhBDECL2eGYs2a
          source_id: s_54YGtEdiddBZ15V4F8ErRc
          stance: supports
          locator: CBDB:158365
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5VqTuGkcAjhfDDDnNmjTYq
        subject_person_id: p_rUMuK7CzfJfHKJ88kFi4jQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cBRYoF4LBHA41aXU9G6Tjy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A9_WT2ES7UTM8-4327FHd6
          claim_id: c_5VqTuGkcAjhfDDDnNmjTYq
          source_id: s_54YGtEdiddBZ15V4F8ErRc
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaicheng 37：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_54YGtEdiddBZ15V4F8ErRc
            source_type: api_record
            title: 中国历代人物传记资料库：王文雅（CBDB 158365）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158365&o=json
            external_identifier: CBDB:158365
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_rUMuK7CzfJfHKJ88kFi4jQ
        status: active
        display_name: 王如琬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文雅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王文雅，唐人物。籍贯高平。（中国历代人物传记资料库 CBDB 158365） | accepted |
| name.primary | 王文雅 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rUMuK7CzfJfHKJ88kFi4jQ | 王如琬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文雅（CBDB 158365）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158365&o=json)
