---
schema: wang-person/v1
id: p_PbvuePrA2559TTXG2H13x8
status: active
merged_into: null
display_name: 王九娘
cbdb_id: 152415
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q481ph8vgKpezbYgbNJdMG
        subject_person_id: p_PbvuePrA2559TTXG2H13x8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九娘，唐人物。中国历代人物传记资料库（CBDB）以人物编号 152415 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_53oS-D2aJ96ZvY82mx68Za
          claim_id: c_q481ph8vgKpezbYgbNJdMG
          source_id: s_sZQ28WxxHgSK5hgKL5UEXW
          stance: supports
          locator: CBDB:152415
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_sZQ28WxxHgSK5hgKL5UEXW
            source_type: api_record
            title: 中国历代人物传记资料库：王九娘（CBDB 152415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152415&o=json
            external_identifier: CBDB:152415
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ytJaK6pUhcKA12g29GcJHe
        subject_person_id: p_PbvuePrA2559TTXG2H13x8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九娘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_f2cqE23r4MMW1QCxQf8N95
          claim_id: c_ytJaK6pUhcKA12g29GcJHe
          source_id: s_sZQ28WxxHgSK5hgKL5UEXW
          stance: supports
          locator: CBDB:152415
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_sZQ28WxxHgSK5hgKL5UEXW
            source_type: api_record
            title: 中国历代人物传记资料库：王九娘（CBDB 152415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152415&o=json
            external_identifier: CBDB:152415
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_to6a9nb2rc37xWG7-cgwvh
        subject_person_id: p_MPKDCVoTw3ezXKDrH5XZgB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PbvuePrA2559TTXG2H13x8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LCQcdpAVdF0c0hszwRjbkS
          claim_id: c_to6a9nb2rc37xWG7-cgwvh
          source_id: s_sZQ28WxxHgSK5hgKL5UEXW
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 345：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MPKDCVoTw3ezXKDrH5XZgB
        status: active
        display_name: 王希俊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王九娘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王九娘，唐人物。中国历代人物传记资料库（CBDB）以人物编号 152415 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王九娘 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MPKDCVoTw3ezXKDrH5XZgB | 王希俊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王九娘（CBDB 152415）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152415&o=json)
