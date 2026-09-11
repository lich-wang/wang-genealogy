---
schema: wang-person/v1
id: p_UpqxZDXb6PdP6z8iWkHriC
status: active
merged_into: null
display_name: 王忠義
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ixWxaA5qorzYZnvj7mCU1M
        subject_person_id: p_UpqxZDXb6PdP6z8iWkHriC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FUHrQei8D2ZM3gBXdCKFZe
          claim_id: c_ixWxaA5qorzYZnvj7mCU1M
          source_id: s_qNF2rvRW2w972hPcH1RNht
          stance: supports
          locator: CBDB:193009
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（193009）
          source: &a1
            id: s_qNF2rvRW2w972hPcH1RNht
            source_type: api_record
            title: 中国历代人物传记资料库：王忠義（CBDB 193009）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193009&o=json
            external_identifier: CBDB:193009
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.429Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_GnTgHmZ8FD8GdjmTgMEK9k
        subject_person_id: p_UpqxZDXb6PdP6z8iWkHriC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 824年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P1EDGitJ5k6VeLbyy9b1mi
          claim_id: c_GnTgHmZ8FD8GdjmTgMEK9k
          source_id: s_qNF2rvRW2w972hPcH1RNht
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
        id: c_sZP1PmRbXAELEm6g3fs7HQ
        subject_person_id: p_UpqxZDXb6PdP6z8iWkHriC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠義（卒于824年），唐人物。籍贯長安。（中国历代人物传记资料库 CBDB 193009）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4W6j3Zdom5gUR9V8afbbeK
          claim_id: c_sZP1PmRbXAELEm6g3fs7HQ
          source_id: s_qNF2rvRW2w972hPcH1RNht
          stance: supports
          locator: CBDB:193009
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
  descendants: []
  other: []
---

# 王忠義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王忠義 | accepted |
| death.date | 824年 | accepted |
| bio.summary | 王忠義（卒于824年），唐人物。籍贯長安。（中国历代人物传记资料库 CBDB 193009） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王忠義（CBDB 193009）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193009&o=json)
