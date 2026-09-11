---
schema: wang-person/v1
id: p_h15MMC3D4umBbLAEXyqKii
status: active
merged_into: null
display_name: 王喆
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uBJMQ9BUU1MiB11N9CUR5B
        subject_person_id: p_h15MMC3D4umBbLAEXyqKii
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王喆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C1YjRkiCt29LregdjXAE8S
          claim_id: c_uBJMQ9BUU1MiB11N9CUR5B
          source_id: s_oK8NAZy5x78PfKhGNR2xSd
          stance: supports
          locator: CBDB:333531
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（333531）
          source: &a1
            id: s_oK8NAZy5x78PfKhGNR2xSd
            source_type: api_record
            title: 中国历代人物传记资料库：王喆（CBDB 333531）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333531&o=json
            external_identifier: CBDB:333531
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.412Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xo1QkVULovwSExFcSU3etK
        subject_person_id: p_h15MMC3D4umBbLAEXyqKii
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王喆，明人物。嘉靖四十四年進士，曾任壽官。（中国历代人物传记资料库 CBDB 333531）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__PO7F8K_PBAml7tf7-HozG
          claim_id: c_xo1QkVULovwSExFcSU3etK
          source_id: s_oK8NAZy5x78PfKhGNR2xSd
          stance: supports
          locator: CBDB:333531
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
  descendants:
    - claim:
        id: c_oUAnBc_X-LDM6DyfWK6dBM
        subject_person_id: p_h15MMC3D4umBbLAEXyqKii
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_U6AM1nUKLfQ5njnQVtaNYH
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D30t2_b7yCvG_XIpaljfGc
          claim_id: c_oUAnBc_X-LDM6DyfWK6dBM
          source_id: s_oK8NAZy5x78PfKhGNR2xSd
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第三百一十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_U6AM1nUKLfQ5njnQVtaNYH
        status: active
        display_name: 王肇林
        merged_into_person_id: null
  other: []
---

# 王喆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王喆 | accepted |
| bio.summary | 王喆，明人物。嘉靖四十四年進士，曾任壽官。（中国历代人物传记资料库 CBDB 333531） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_U6AM1nUKLfQ5njnQVtaNYH | 王肇林 | accepted |

## 外部来源

- [中国历代人物传记资料库：王喆（CBDB 333531）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333531&o=json)
