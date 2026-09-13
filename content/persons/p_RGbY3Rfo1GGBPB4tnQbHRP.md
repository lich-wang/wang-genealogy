---
schema: wang-person/v1
id: p_RGbY3Rfo1GGBPB4tnQbHRP
status: active
merged_into: null
display_name: 王繼樸
cbdb_id: 294878
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CUbMxqUyoE7NARbrRnGBKr
        subject_person_id: p_RGbY3Rfo1GGBPB4tnQbHRP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王繼樸，明人物。嘉靖十一年進士，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 294878）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_bOpRJ3VWfrljPdPz1jQLAa
          claim_id: c_CUbMxqUyoE7NARbrRnGBKr
          source_id: s_ndt7K3NN6AJp1XTrq6GuRj
          stance: supports
          locator: CBDB:294878
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ndt7K3NN6AJp1XTrq6GuRj
            source_type: api_record
            title: 中国历代人物传记资料库：王繼樸（CBDB 294878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294878&o=json
            external_identifier: CBDB:294878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_c1FdPi466MJPK7yTUbFvhz
        subject_person_id: p_RGbY3Rfo1GGBPB4tnQbHRP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼樸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_my1oNysY2q2EUdwhgxKRM4
          claim_id: c_c1FdPi466MJPK7yTUbFvhz
          source_id: s_ndt7K3NN6AJp1XTrq6GuRj
          stance: supports
          locator: CBDB:294878
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_JeRgfCQySft-86UVziy7xX
        subject_person_id: p_netpjn2vvpbP4gRNZK5nnW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RGbY3Rfo1GGBPB4tnQbHRP
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xSG33RmhOpDK1Vpj__7sos
          claim_id: c_JeRgfCQySft-86UVziy7xX
          source_id: s_ndt7K3NN6AJp1XTrq6GuRj
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百二十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ndt7K3NN6AJp1XTrq6GuRj
            source_type: api_record
            title: 中国历代人物传记资料库：王繼樸（CBDB 294878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294878&o=json
            external_identifier: CBDB:294878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_netpjn2vvpbP4gRNZK5nnW
        status: active
        display_name: 王畿
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王繼樸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王繼樸，明人物。嘉靖十一年進士，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 294878） | accepted |
| name.primary | 王繼樸 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_netpjn2vvpbP4gRNZK5nnW | 王畿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繼樸（CBDB 294878）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294878&o=json)
