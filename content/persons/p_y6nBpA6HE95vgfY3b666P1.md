---
schema: wang-person/v1
id: p_y6nBpA6HE95vgfY3b666P1
status: active
merged_into: null
display_name: 王古
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ie6KSFLTNK3tC9GYF6J7vH
        subject_person_id: p_y6nBpA6HE95vgfY3b666P1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王古
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4WAqjZxPXBTirHQGfhkJ1T
          claim_id: c_ie6KSFLTNK3tC9GYF6J7vH
          source_id: s_MPwJf64vAVgtxmJKcG7WvT
          stance: supports
          locator: CBDB:1840
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1840）
          source: &a1
            id: s_MPwJf64vAVgtxmJKcG7WvT
            source_type: api_record
            title: 中国历代人物传记资料库：王古（CBDB 1840）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1840&o=json
            external_identifier: CBDB:1840
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.324Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YmR6QAXcCbkeXVRZFbDt8m
        subject_person_id: p_y6nBpA6HE95vgfY3b666P1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王古，宋人物。籍贯莘縣，身份为結社、入元祐黨籍者，入仕進士，曾任提舉、尚書省戶部尚書、尚書省戶部侍郎。（中国历代人物传记资料库 CBDB 1840）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OTFDV6FGN6GeItj3gKIzU5
          claim_id: c_YmR6QAXcCbkeXVRZFbDt8m
          source_id: s_MPwJf64vAVgtxmJKcG7WvT
          stance: supports
          locator: CBDB:1840
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_d_QPlaUBt7xOrIX_vUx7oJ
        subject_person_id: p_AZk4wkgQ7UuXpAj8THZhSe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_y6nBpA6HE95vgfY3b666P1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W_0JvZW0wZsqpp8kM-GLMH
          claim_id: c_d_QPlaUBt7xOrIX_vUx7oJ
          source_id: s_UPXA3cLM7jkbMSu2afxwPY
          stance: supports
          locator: 宋人傳記資料索引(電子版)，588：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UPXA3cLM7jkbMSu2afxwPY
            source_type: api_record
            title: 中国历代人物传记资料库：王靖（CBDB 1788）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1788&o=json
            external_identifier: CBDB:1788
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.255Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AZk4wkgQ7UuXpAj8THZhSe
        status: active
        display_name: 王靖
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王古

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王古 | accepted |
| bio.summary | 王古，宋人物。籍贯莘縣，身份为結社、入元祐黨籍者，入仕進士，曾任提舉、尚書省戶部尚書、尚書省戶部侍郎。（中国历代人物传记资料库 CBDB 1840） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AZk4wkgQ7UuXpAj8THZhSe | 王靖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王古（CBDB 1840）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1840&o=json)
- [中国历代人物传记资料库：王靖（CBDB 1788）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1788&o=json)
