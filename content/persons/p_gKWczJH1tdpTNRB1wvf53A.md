---
schema: wang-person/v1
id: p_gKWczJH1tdpTNRB1wvf53A
status: active
merged_into: null
display_name: 王恆沔
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DaTMXrQq7y8ynekafeCJtF
        subject_person_id: p_gKWczJH1tdpTNRB1wvf53A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恆沔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_S8eedCGn38jfoN4BCLcnwn
          claim_id: c_DaTMXrQq7y8ynekafeCJtF
          source_id: s_U6qoQ7ekYLGep1imiGBq9J
          stance: supports
          locator: CBDB:192521
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（192521）
          source: &a1
            id: s_U6qoQ7ekYLGep1imiGBq9J
            source_type: api_record
            title: 中国历代人物传记资料库：王恆沔（CBDB 192521）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192521&o=json
            external_identifier: CBDB:192521
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.401Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_PGRoiC9Ja5DD674CzxWGzX
        subject_person_id: p_gKWczJH1tdpTNRB1wvf53A
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 829年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hiw8vMFa83rxf6BN7AVW4N
          claim_id: c_PGRoiC9Ja5DD674CzxWGzX
          source_id: s_U6qoQ7ekYLGep1imiGBq9J
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
        id: c_Tp7JwCT6LSFzJfumdveW3G
        subject_person_id: p_gKWczJH1tdpTNRB1wvf53A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恆沔（卒于829年），唐人物。籍贯上谷郡。（中国历代人物传记资料库 CBDB 192521）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CihoTuKuC-Wmtutu9ZufmX
          claim_id: c_Tp7JwCT6LSFzJfumdveW3G
          source_id: s_U6qoQ7ekYLGep1imiGBq9J
          stance: supports
          locator: CBDB:192521
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WJCw7gUF7-aJ7ToUBlnLfS
        subject_person_id: p_yzbyLWEwa8DKLF9NjjcA7m
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gKWczJH1tdpTNRB1wvf53A
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7eeWQ-DHnF4kMMyF1ipvY7
          claim_id: c_WJCw7gUF7-aJ7ToUBlnLfS
          source_id: s_U6qoQ7ekYLGep1imiGBq9J
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yzbyLWEwa8DKLF9NjjcA7m
        status: active
        display_name: 王庭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王恆沔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恆沔 | accepted |
| death.date | 829年 | accepted |
| bio.summary | 王恆沔（卒于829年），唐人物。籍贯上谷郡。（中国历代人物传记资料库 CBDB 192521） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yzbyLWEwa8DKLF9NjjcA7m | 王庭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恆沔（CBDB 192521）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192521&o=json)
